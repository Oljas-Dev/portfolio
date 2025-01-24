import styled from "styled-components";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import toast from "react-hot-toast";
import { useRef, useState } from "react";

import Decoration from "../ui/Decoration";
import Modal from "../ui/Modal";
import { SkillDescription, StyledOptions } from "../Variables/Variables";
import { useToggle } from "../contexts/BlogContext";
import { haversine } from "../helpers/Helpers";

const Container = styled.div`
  display: flex;
  gap: 2rem;
  transform: translateX(13%);

  h3 {
    color: var(--color-h2);
  }

  @media only screen and (max-width: 68.75em) {
    transform: translateX(-5%);
  }
  @media only screen and (max-width: 62.5em) {
    transform: none;
  }
  @media only screen and (max-width: 43.75em) {
    flex-direction: column-reverse;
    margin-bottom: 10rem;
  }
  @media only screen and (max-width: 37.5em) {
    margin-top: 3.5rem;
  }
  @media only screen and (max-width: 18.75em) {
    margin-top: 7rem;
  }
`;

const ContactsCard = styled(SkillDescription)`
  p {
    text-align: center;
  }
  p + p {
    margin-top: 3rem;
  }

  @media only screen and (max-width: 43.75em) {
    width: 48rem;
  }
`;

const MapGroup = styled(SkillDescription)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 48rem;
  height: 50rem;
  @media only screen and (max-width: 43.75em) {
    height: 60rem;
  }
`;

const DistanceBetween = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const DistBtn = styled.button`
  background-color: var(--color-formsBack);
  padding: 0.2rem 1rem;

  border: 1px solid transparent;
  border-radius: 5px;
  outline: none;

  &:hover {
    border: 1px solid var(--color-links);
    color: var(--color-borders);
  }
`;

function Contacts() {
  const { newMarker } = useToggle();
  const [distance, setDistance] = useState(null);

  const mapPosition = [49.57, 10.88];
  const topRef = useRef(null);

  function handleDistance() {
    if (newMarker === undefined) {
      toast.error(
        "Please choose your city to check the straight distance between us"
      );
      return;
    }

    let distCalcData = [];
    if (newMarker) distCalcData = mapPosition.concat(newMarker);

    haversine(distCalcData, setDistance);
  }

  return (
    <Decoration>
      <Decoration.Main>
        <StyledOptions $mode="secondary">
          <Modal>
            <Modal.Options mode="secondary" path="/options" ref={topRef} />
          </Modal>
          <Container>
            <ContactsCard>
              <h3>Ways you can contact me:</h3>
              <p>
                Email: <br /> medetbaevoljas@gmail.com
              </p>
              <p>
                Phone: <br /> +49 160 962 053 49
              </p>
              <p>
                Telegram: <br /> @oljasmedets
              </p>
              <p>
                WhatsApp: <br /> +380990320076
              </p>
            </ContactsCard>
            <MapGroup>
              <h3>Currently living in Herzogenaurach</h3>
              <DistanceBetween>
                <DistBtn onClick={() => handleDistance()}>distance</DistBtn>
                <p>
                  {distance === null
                    ? "Choose your city to check the distance"
                    : `Approximately ${distance}km between us`}
                </p>
              </DistanceBetween>
              <MapContainer
                center={mapPosition}
                zoom={10}
                scrollWheelZoom={true}
                className="map"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.fr/hot/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={mapPosition}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
                {newMarker && (
                  <Marker position={newMarker}>
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                  </Marker>
                )}
                <DetectClick />
              </MapContainer>
            </MapGroup>
          </Container>
        </StyledOptions>
      </Decoration.Main>
    </Decoration>
  );
}

function DetectClick() {
  const { setNewMarker } = useToggle();
  useMapEvents({
    click: (e) => {
      setNewMarker([e.latlng.lat, e.latlng.lng]);
    },
  });
}

export default Contacts;
