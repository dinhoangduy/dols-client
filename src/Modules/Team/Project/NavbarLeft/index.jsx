import React from "react";
import PropTypes from "prop-types";

import { Icon, AboutTooltip } from "/src/Modules/Team/shared/components";

import {
    NavLeft,
    LogoLink,
    StyledLogo,
    Bottom,
    Item,
    ItemText,
} from "./Styles";
import { useNavigate } from "react-router-dom";

const propTypes = {
    issueSearchModalOpen: PropTypes.func.isRequired,
    issueCreateModalOpen: PropTypes.func.isRequired,
};

const ProjectNavbarLeft = ({ issueSearchModalOpen, issueCreateModalOpen }) => {
  const navigate = useNavigate();  
  const handleLogout = () => {
      localStorage.removeItem("token");
      navigate("/home")
    }
    return (
        <NavLeft>
            <LogoLink to="/">
                <StyledLogo color="#fff" />
            </LogoLink>

            <Item onClick={issueSearchModalOpen}>
                <Icon type="search" size={22} top={1} left={3} />
                <ItemText>Search issues</ItemText>
            </Item>
            <Item onClick={issueCreateModalOpen}>
                <Icon type="plus" size={27} />
                <ItemText>Create Issue</ItemText>
            </Item>
            <Item onClick={handleLogout}>
                <Icon type="close" size={27} />
                <ItemText>Đăng xuất</ItemText>
            </Item>

            <Bottom>
                <AboutTooltip
                    placement="right"
                    offset={{ top: -218 }}
                    renderLink={(linkProps) => (
                        <Item {...linkProps}>
                            <Icon type="help" size={25} />
                            <ItemText>About</ItemText>
                        </Item>
                    )}
                />
            </Bottom>
        </NavLeft>
    );
};

ProjectNavbarLeft.propTypes = propTypes;

export default ProjectNavbarLeft;
