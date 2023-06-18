import { Button } from "@/components/ui/button"

export default function Buttons() {
  return (
    <div>
      <div className="px-2 py-10">
        <h1 className="text-3xl font-medium">Buttons</h1>
      </div>
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-2 p-2">
          <h2 className="text-sm font-medium">Default</h2>
          <div className="flex gap-x-2">
            <Button variant="default">Default</Button>
            <Button variant="default" pill={true}>
              Pill
            </Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="outline" fullWidth="true">
              Outline
            </Button>
            <Button variant="subtle">Subtle</Button>
            <Button variant="ghost">Ghost</Button>
            <Button href="/" variant="link">
              Link
            </Button>
            <Button disabled={true}>Disabled</Button>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-2">
          <h2 className="text-sm font-medium">Small</h2>
          <div className="flex gap-x-2">
            <Button variant="default" size="sm">
              Default
            </Button>
            <Button variant="default" pill={true} size="sm">
              Pill
            </Button>
            <Button variant="destructive" size="sm">
              Destructive
            </Button>
            <Button variant="outline" size="sm">
              Outline
            </Button>
            <Button variant="outline" fullWidth="true" size="sm">
              Outline
            </Button>
            <Button variant="subtle" size="sm">
              Subtle
            </Button>
            <Button variant="ghost" size="sm">
              Ghost
            </Button>
            <Button href="/" variant="link" size="sm">
              Link
            </Button>
            <Button disabled={true} size="sm">
              Disabled
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-2">
          <h2 className="text-sm font-medium">Large</h2>
          <div className="flex gap-x-2">
            <Button variant="default" size="lg">
              Default
            </Button>
            <Button variant="default" pill={true} size="lg">
              Pill
            </Button>
            <Button variant="destructive" size="lg">
              Destructive
            </Button>
            <Button variant="outline" size="lg">
              Outline
            </Button>
            <Button variant="outline" fullWidth="true" size="lg">
              Outline
            </Button>
            <Button variant="subtle" size="lg">
              Subtle
            </Button>
            <Button variant="ghost" size="lg">
              Ghost
            </Button>
            <Button href="/" variant="link" size="lg">
              Link
            </Button>
            <Button disabled={true} size="lg">
              Disabled
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
