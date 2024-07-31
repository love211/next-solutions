import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function TooltipCustom({ msg, element }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {/* <Button variant="outline">Hover</Button> */}
          {element}
        </TooltipTrigger>
        <TooltipContent>
          <p>{msg}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
