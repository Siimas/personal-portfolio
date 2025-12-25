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
      <Item>
        <ItemMedia>
          <Avatar className="size-22">
            <AvatarImage src={process.env.NEXT_PUBLIC_PROFILE_PICTURE} />
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="text-3xl font-bold">Simão Marques</ItemTitle>
          <ItemDescription className="text-lg font-medium">
            Senior Full Stack Developer @{" "}
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
            I'm a Full Stack Engineer who doesn't wait for problems to fix
            themselves. With 3+ years in SaaS and CRM development, I take
            ownership of problems from root cause to production-ready solution.
          </p>
        </ItemContent>
        <ItemActions>
          <Button variant="outline">Contact Me</Button>
        </ItemActions>
      </Item>
    </div>
  );
}
