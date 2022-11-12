import React from "react";
import Icon from "../global/Icon";
import styled from "styled-components";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const SocialNet = styled.div`
font-size: 24px;
gap: 25px;
display: flex;
color:${(props)=>{return props.color}};


@media only screen and (min-width: 624px) {
  display: flex;
}
`;

const SocialNetworks = ({ color }) => {
 
  return (
    <SocialNet color={color}>
      <Icon icon={faFacebook} />
      <Icon icon={faLinkedinIn} />
      <Icon icon={faTwitter} />
      <Icon icon={faInstagram} />
    </SocialNet>
  );
};

export default SocialNetworks;
