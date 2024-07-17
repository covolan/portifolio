import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import "./ToolTip.css";

export default function ToolTip({ Children, Content }) {
  return (
    <Tooltip.Provider delayDuration={150}>
      <Tooltip.Root>
        <Tooltip.Trigger>{Children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="TooltipContent">
            {Content}
            <Tooltip.Arrow className="TooltipArrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
