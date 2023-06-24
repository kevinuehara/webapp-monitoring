import { Content } from "../components/Content";
import { Header } from "../components/Header";
import { SocialMedia } from "../components/SocialMedia";

export const About = () => {
  return (
    <>
      <Header />
      <Content>
        <h2 className="mb-2">About</h2>
        <div className="flex mt-5">
          <div className="w-40">
            <img
              src="src/assets/kevin.jpg"
              className="rounded-full"
              loading="lazy"
              aria-label="Kevin image profile"
            />
          </div>
          <div className="text-gray-700 ml-3 mt-5">
            <p className="font-bold">Hi, my name is Kevin Uehara!</p>
            <p>Frontend Software Engineer, Speaker and Content Creator</p>
            <div className="mt-2">
              <SocialMedia
                socialMedia="Linkedin"
                user="@ueharaDev"
                url="https://www.linkedin.com/in/kevin-uehara/"
              />
              <SocialMedia
                socialMedia="Twitter"
                user="Kevin Uehara"
                url="https://twitter.com/ueharaDev"
              />
              <SocialMedia
                socialMedia="Instagram"
                user="@uehara_kevin"
                url="https://www.instagram.com/uehara_kevin"
              />
              <SocialMedia
                socialMedia="Github"
                user="@kevinuehara"
                url="https://github.com/kevinuehara/"
              />
              <SocialMedia
                socialMedia="Dev.to"
                user="kevin-uehara"
                url="https://dev.to/kevin-uehara"
              />
            </div>
          </div>
        </div>
      </Content>
    </>
  );
};
