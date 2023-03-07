import React from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h1" color="teal" textAlign="center">
          Log-in to your accounts
        </Header>

        <Form size="massive">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Kullanıcı adı"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Şifre"
              type="password"
            />
            <Button color="teal" fluid size="huge">
              <Link to="/tasklist" >Giriş Yap</Link>
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
}
