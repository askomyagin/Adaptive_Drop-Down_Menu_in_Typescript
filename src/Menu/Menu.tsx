import { FC } from 'react';
import styled from '@emotion/styled';

interface MenuProps {
    header: string;
    items: {
        value: string;
        href: string;
        icon: string;
    }[];
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Menu: FC<MenuProps> = ({ header, items, active, setActive }) => {
    return (
        <MenuContainer className={active ? 'active' : ''} onClick={() => setActive(false)}>
            <Blur />
            <MenuContent onClick={(e) => e.stopPropagation()}>
                <MenuHeader>{header}</MenuHeader>
                <Ul>
                    {items.map((el) => (
                        <Li>
                            <A href={el.href}>{el.value}</A>
                            <Span className="material-icons">{el.icon}</Span>
                        </Li>
                    ))}
                </Ul>
            </MenuContent>
        </MenuContainer>
    );
};

const MenuContainer = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 50px;
    left: 0;
    transform: translateX(-130%);
    transition: all 0.2s;
    &.active {
        transform: translateX(0);
    }
`;

const Blur = styled.div`
    width: 100%;
    height: 100vh;
    backdrop-filter: blur(2px);
    position: absolute;
    left: 30%;
    @media screen and (max-width: 768px) {
        backdrop-filter: none;
    }
`;
const MenuContent = styled.div`
    width: 30%;
    height: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.4s;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;
const MenuHeader = styled.div`
    font-size: 2rem;
    color: #fff;
    padding: 10px;
    border-bottom: 1px solid #fff;
    text-align: center;
    width: 100%;
`;
const Ul = styled.ul`
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
`;
const Li = styled.li`
    margin: 10px 0;
    display: flex;
`;

const A = styled.a`
    color: #fff;
    font-size: 1.2rem;
    text-decoration: none;
`;

const Span = styled.span`
    color: #fff;
    margin-left: 10px;
`;
