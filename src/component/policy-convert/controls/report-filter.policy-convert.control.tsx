import React from "react";
import { ReportFilterItemPolicyConvertControl } from "./report-filter-item.policy-convert.control";
import { styled } from "@mui/system";
import { usePolicyConvertState } from "../../../store/policy-convert/policy-convert.hooks";
import { KeyParsingResultEnum } from "../../../converter/model/key-parsing-result.enum";

const FiltersContainer = styled("div")({
  display: "flex",
});

export const ReportFilterPolicyConvertControl: React.VoidFunctionComponent =
  () => {
    const { log } = usePolicyConvertState();

    console.log(log);

    const success = log
      ? log.count(
          (x) => x.keyParsingResultEnum === KeyParsingResultEnum.success
        )
      : undefined;

    const partially = log
      ? log.count(
          (x) => x.keyParsingResultEnum === KeyParsingResultEnum.partially
        )
      : undefined;
    const notSupported = log
      ? log.count(
          (x) =>
            x.keyParsingResultEnum === KeyParsingResultEnum.notSupported ||
            x.keyParsingResultEnum === KeyParsingResultEnum.error
        )
      : undefined;

    // const success = 0;
    // const partially = 0;
    // const notSupported = 0;

    return (
      <FiltersContainer>
        <ReportFilterItemPolicyConvertControl
          text={"Successfully converted"}
          value={success}
          color="rgba(26, 164, 3, 1)"
        />
        <ReportFilterItemPolicyConvertControl
          text={"Partially converted"}
          value={partially}
          color="rgba(255, 173, 75, 1)"
        />
        <ReportFilterItemPolicyConvertControl
          text={"Not supported"}
          color="rgba(194, 0, 0, 1)"
          value={notSupported}
        />
      </FiltersContainer>
    );
  };
