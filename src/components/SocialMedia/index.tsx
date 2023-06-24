interface SocialMediaProps {
  socialMedia: string;
  user: string;
  url: string;
}

export const SocialMedia = ({ socialMedia, user, url }: SocialMediaProps) => {
  return (
    <div className="flex">
      <p className="text-xs font-bold">{socialMedia}:</p>
      <a
        className="text-xs ml-1 hover:text-blue-500"
        href={url}
        target="_blank"
      >
        {user}
      </a>
    </div>
  );
};
