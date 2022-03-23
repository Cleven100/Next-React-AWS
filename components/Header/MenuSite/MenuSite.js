import React, { useState, useEffect } from "react";
import { Container, Menu, Grid, Icon, Label } from "semantic-ui-react";
import Link from "next/link";
import ModalBasico from "../../Modal/ModalBasico/ModalBasico";
import { map } from "lodash";
import Auth from "../../Auth";
import TopBar from "../TopBar";
import useAuth from "../../../hooks/useAuth";
import { getMeApi } from "../../../api/user";
import { getPlatFormsApi } from "../../../api/platform";
import { Search } from "../TopBar/TopBar";

export default function MenuSite() {
  const [platforms, setPlatforms] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("Inciar sessão");
  const [user, setUser] = useState(undefined);
  const { auth, logout } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getMeApi(logout);
      setUser(response);
    })();
  }, [auth]);

  useEffect(() => {
    (async () => {
      const response = await getPlatFormsApi();
      setPlatforms(response || []);
    })();
  }, []);

  const onShowModal = () => setShowModal(true);
  const onCloseModal = () => setShowModal(false);

  return (
    <div className="fundo">
      <Grid>
        <Grid.Column className="menu__left" width={6}>
          <TopBar />
        </Grid.Column>
         <Grid.Column width={2} className="menu__right">
           <Search />
         </Grid.Column>
        <Grid.Column className="menu__right" width={6}>
          {user !== undefined && (
            <MenuOptions
              onShowModal={onShowModal}
              user={user}
              logout={logout}
            />
          )}
        </Grid.Column>
       
      </Grid>

      <ModalBasico
        show={showModal}
        setShow={setShowModal}
        title={titleModal}
        size="small"
      >
        <Auth onCloseModal={onCloseModal} setTitleModal={setTitleModal} />
      </ModalBasico>
    </div>
  );
}

export function MenuPlatforms(props) {
  const { platforms } = props;

  return <Menu>
    {map(platforms, (platform) => (
      <Link href={`/produtos/${platform.url}`} key={platform._id}>
        <Menu.Item as="a" name={platform.url}>
          {platform.title}
        </Menu.Item>
      </Link>
    ))}
    
    </Menu>;
}

function MenuOptions(props) {
  const { onShowModal, user, logout } = props;
  return (
    <Menu>
      {user ? (
        <>
          <Link href="/cart">
            <Menu.Item as="a" className="carrinho">
              <Icon name="cart" />
            </Menu.Item>
          </Link>
          <Link href="/orders">
            <Menu.Item as="a" className="orders">
              <Icon name="desktop" />
              Meus pedidos
            </Menu.Item>
          </Link>

          <Link href="/wishlist">
            <Menu.Item as="a" className="wishlist">
              <Icon name="heart outline" />
              Favoritos
            </Menu.Item>
          </Link>

          <Link href="/account">
            <Menu.Item as="a" className="account">
              <Icon name="user outline" />
            </Menu.Item>
          </Link>

          <Link href="/account">
            <Menu.Item as="a" className="home">
              <Icon name="home" />
            </Menu.Item>
          </Link>

          <Menu.Item onClick={logout}>
            <Icon name="power off" />
          </Menu.Item>
        </>
      ) : (
        <>
          <Menu.Item onClick={onShowModal}>
            <Icon name="cart" />
          </Menu.Item>
          <Menu.Item onClick={onShowModal}>
            <Icon name="user outline" />
            Login
          </Menu.Item>
        </>
      )}
    </Menu>
  );
}
