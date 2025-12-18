import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function BioSection() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center py-10">
      <Item variant="muted">
        <ItemMedia variant="icon">
          <Avatar className="size-22">
            <AvatarImage src="https://media.licdn.com/dms/image/v2/D5603AQGWRIs220UXNg/profile-displayphoto-shrink_800_800/B56ZaRgXZzG4Ag-/0/1746197903857?e=1767830400&v=beta&t=RjKcfbKxQtr3FDnGj9GtGN7nNyOng39NeW6b041uxno" />
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="text-3xl font-bold">Simão Marques</ItemTitle>
          <ItemDescription className="text-lg font-medium">
            Full Stack Developer @{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.kompetenza.com"
              className="text-primary underline-offset-4"
            >
              Kompetenza
            </a>
          </ItemDescription>
          <p className="leading-7 font-medium">
            I'm a full stack developer with a passion for building web
            applications. I'm currently working as a software engineer at{" "}
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google
            </a>
            .
          </p>
        </ItemContent>
        <ItemActions>
          <Button variant="outline">Contact Me</Button>
        </ItemActions>
      </Item>
    </div>
  );
}
