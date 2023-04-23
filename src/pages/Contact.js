import { SocialIcon } from 'react-social-icons';
import Stack from '@mui/material/Stack'

export default function Contact() {
  return (
    <div className="App">
      <header className="App-header"/>
      <h1 class="Text-default">Get in touch</h1>
      <p class="Text-default">
        If you want to say hi or collaborate feel free to reach out! 
      </p>
      <p class="Text-default">
      You can email me at <a class="Link-default" href="mailto:contact@wiggins.dev">contact@wiggins.dev</a> or hit me up on any of the socials listed below!
      </p>
      <p class="Text-default" style={{ marginTop: 14 }}>
        Nostr: npub18hvrtz2v2xds7adczdtk7v4l7z4rg9z6xafpty5md83h2d3964gs6fyyac
      </p>
      <Stack direction="row" spacing={2}>
        <SocialIcon url="https://twitter.com/mattwigginsdev"/>
        <SocialIcon url="https://www.linkedin.com/in/matt-wiggins-6678b7b7/"/>
      </Stack>
      </div>
  );
}