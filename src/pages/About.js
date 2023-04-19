import useCheckMobileScreen from "../hooks/useCheckMobileScreen";


export default function About() {
    const isMobile = useCheckMobileScreen();
    return (
      <div className="App">
        <header className="App-header"/>
        <div style={{
          textAlign: 'center',
          width: isMobile ? '90%' : '40%',
        }}>
          <h1 class="Text-default">Hey, I'm Matt Wiggins!</h1>
          <p class="Text-default">
          I am a full stack mobile engineer based in Illinois, currently working at Casa leading a team of talented mobile engineers in building our primary mobile product.
          In the past I have worked as a mobile developer for companies such as John Deere, Axion.network, and The Climate Corporation.
          </p>
          <p class="Text-default">
            I'm also attending the University of Illinois for a Master's in CS because I have a passion for learning and teaching.
          </p>
          <p class="Text-default">
          Check out what I've been building in the <a class="Link-default" href="https://www.wiggins.dev/work">Work</a> or <a class="Link-default" href="https://www.wiggins.dev/projects">Projects</a> pages!
          </p>
        </div>
      </div>
    );
  }