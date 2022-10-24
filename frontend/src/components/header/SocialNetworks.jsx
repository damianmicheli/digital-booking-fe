import React from "react";
import Icon from "../Icon";
import styled from "styled-components";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const SocialNetworks = ({ color }) => {
  const SocialNetworks = styled.div`
    font-size: 24px;
    gap: 25px;
    display: none;
    color:${color};

    @media only screen and (min-width: 624px) {
      display: flex;
    }
  `;
  return (
    <SocialNetworks>
      <Icon icon={faFacebook} />
      <Icon icon={faLinkedinIn} />
      <Icon icon={faTwitter} />
      <Icon icon={faInstagram} />
    </SocialNetworks>
  );
};

export default SocialNetworks;
