/* eslint-disable react/no-unescaped-entities */
import Avatar from "../components/Avatar";
import Card from "../components/Card";
import CardLink from "../components/CardLink";

const HomeScreen = () => {
  const links = [
    { name: "GitHub", href: "#", emoji: "👨‍💻" },
    { name: "FrontendMentor", href: "#", emoji: "🚀" },
    { name: "LinkedIn", href: "#", emoji: "👔" },
    { name: "Twitter", href: "#", emoji: "🐦" },
    { name: "Instagram", href: "#", emoji: "📸" },
  ];

  return (
    <main className="flex h-dvh items-center justify-center text-base">
      <Card>
        <Avatar src="me.jpg" alt="Zafer AYAN" />
        <span className="mt-6 text-2xl font-semibold">Zafer AYAN</span>
        <span className="dark:text-neon-green mt-1 font-bold">
          Istanbul, Turkey
        </span>
        <span className="mt-6">"Front-end developer and avid reader."</span>
        <div className="mt-6 flex w-full flex-col gap-4 text-center">
          {links.map((link) => (
            <CardLink key={link.name} href={link.href} emoji={link.emoji}>
              {link.name}
            </CardLink>
          ))}
        </div>
      </Card>
    </main>
  );
};

export default HomeScreen;
