import React from 'react';
import styled from '@emotion/styled';
import { Menu } from 'Menu/Menu';
import { useState } from 'react';

function App() {
    const items = [
        { value: 'Главная', href: '', icon: 'home' },
        { value: 'Магазин', href: '', icon: 'list' },
        { value: 'Контакты', href: '', icon: 'settings_phone' },
    ];

    const [menuActive, setMenuActive] = useState(false);

    return (
        <div>
            <Nav>
                <Button onClick={() => setMenuActive(!menuActive)}>
                    <Span />
                </Button>
            </Nav>
            <Main>
                <P>
                    dsfdsfgfdggdfnfdsnjkfdskjfhdskbfushkdflkjsdbfkbsdjfskdjfjalkjfdnksjad
                    fjhkbajdfnfadkjfksdfskdjfnksdbfhkdsfnsdljfksdbfksdbfkjsndkfbsdkbfksdjfhbsdkfh,bnskdfjgshjdbfksjndsfsd
                </P>
                <P>
                    dsfdsfgfdggdfnfdsnjkfdskjfhdskbfushkdflkjsdbfkbsdjfskdjfjalkjfdnksjad
                    fjhkbajdfnfadkjfksdfskdjfnksdbfhkdsfnsdljfksdbfksdbfkjsndkfbsdkbfksdjfhbsdkfh,bnskdfjgshjdbfksjndsfsd
                </P>
                <P>
                    dsfdsfgfdggdfnfdsnjkfdskjfhdskbfushkdflkjsdbfkbsdjfskdjfjalkjfdnksjad
                    fjhkbajdfnfadkjfksdfskdjfnksdbfhkdsfnsdljfksdbfksdbfkjsndkfbsdkbfksdjfhbsdkfh,bnskdfjgshjdbfksjndsfsd
                </P>
                <P>
                    dsfdsfgfdggdfnfdsnjkfdskjfhdskbfushkdflkjsdbfkbsdjfskdjfjalkjfdnksjad
                    fjhkbajdfnfadkjfksdfskdjfnksdbfhkdsfnsdljfksdbfksdbfkjsndkfbsdkbfksdjfhbsdkfh,bnskdfjgshjdbfksjndsfsd
                </P>
                <P>
                    dsfdsfgfdggdfnfdsnjkfdskjfhdskbfushkdflkjsdbfkbsdjfskdjfjalkjfdnksjad
                    fjhkbajdfnfadkjfksdfskdjfnksdbfhkdsfnsdljfksdbfksdbfkjsndkfbsdkbfksdjfhbsdkfh,bnskdfjgshjdbfksjndsfsd
                </P>
                <P>
                    dsfdsfgfdggdfnfdsnjkfdskjfhdskbfushkdflkjsdbfkbsdjfskdjfjalkjfdnksjad
                    fjhkbajdfnfadkjfksdfskdjfnksdbfhkdsfnsdljfksdbfksdbfkjsndkfbsdkbfksdjfhbsdkfh,bnskdfjgshjdbfksjndsfsd
                </P>
                <P>
                    dsfdsfgfdggdfnfdsnjkfdskjfhdskbfushkdflkjsdbfkbsdjfskdjfjalkjfdnksjad
                    fjhkbajdfnfadkjfksdfskdjfnksdbfhkdsfnsdljfksdbfksdbfkjsndkfbsdkbfksdjfhbsdkfh,bnskdfjgshjdbfksjndsfsd
                </P>
            </Main>
            <Menu active={menuActive} setActive={setMenuActive} header={'Меню'} items={items} />
        </div>
    );
}

const Nav = styled.nav`
    height: 50px;
    width: 100%;
    background-color: grey;
    position: fixed;
    z-index: 50;
    display: flex;
    align-items: center;
`;
const Main = styled.main`
    padding: 50px;
`;

const P = styled.p`
    margin: 20px;
`;

const Button = styled.button`
    width: 30px;
    border: none;
    background-color: grey;
    height: 20px;
    margin-left: 20px;
    position: relative;
    cursor: pointer;
    :focus{
        background-color: gray;
    }
    :before {
        content: '';
        position: absolute;
        top: 0;
        width: 20px;
        background-color: black;
        height: 2px;
    }
    :after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 20px;
        background-color: black;
        height: 2px;
    }
`;
const Span = styled.span`
    position: absolute;
    top: 9px;
    width: 20px;
    background-color: black;
    height: 2px;
`;

export default App;
