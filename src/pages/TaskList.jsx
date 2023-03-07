import React from "react";
import { Icon, Menu, Sidebar } from "semantic-ui-react";

export default function TaskList() {
  return (
    <Sidebar
    as={Menu}
    animation="overlay"
    icon="labeled"
    inverted
    vertical
    visible
    width="thin"
  >
    <Menu.Item as="a">
      <Icon name="home" />
      MARKA ADI
    </Menu.Item>

    <Menu.Item as="a">
      <Icon name="tasks" />
      Görev Listesi
    </Menu.Item>

    <Menu.Item as="a">
      <Icon name="plus" />
      Proje Oluşturma
    </Menu.Item>

    <Menu.Item as="a">
      <Icon name="plus" />
      Görev Oluşturma
    </Menu.Item>
    

    <Menu.Item as="a" style={{marginTop:100 }} >
      Çıkış Yap
    </Menu.Item>
  </Sidebar>
  );
}
