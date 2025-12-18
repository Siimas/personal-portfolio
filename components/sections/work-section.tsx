import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function WorkSection() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Full Stack Developer
          </CardTitle>
          <CardDescription className="text-lg font-medium">
            Kompetenza
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="leading-7 font-medium">
            I'm a full stack developer with a passion for building web
            applications.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
