import React, { useState } from "react";
import { ReportFilterItemPolicyConvertControl } from "./report-filter-item.policy-convert.control";
import { styled } from "@mui/system";
import { usePolicyConvertState } from "../../../store/policy-convert/policy-convert.hooks";
import { KeyParsingResultEnum } from "../../../converter/model/key-parsing-result.enum";

const FiltersContainer = styled("div")({
  display: "flex",
});

export type ReportFilterPolicyConvertProps = {
  filterToggle?: (filter: KeyParsingResultEnum, state: boolean) => void;
};

export const ReportFilterPolicyConvertControl: React.FunctionComponent<ReportFilterPolicyConvertProps> =
  ({ filterToggle }) => {
    const { log } = usePolicyConvertState();
    const [filterState, setFilterState] = useState<{ [key: string]: boolean }>({
      [KeyParsingResultEnum.notSupported]: true,
      [KeyParsingResultEnum.success]: true,
      [KeyParsingResultEnum.partially]: true,
    });

    const success = log?.count
      ? log.count(
          (x) => x.keyParsingResultEnum === KeyParsingResultEnum.success
        )
      : undefined;

    const partially = log?.count
      ? log.count(
          (x) => x.keyParsingResultEnum === KeyParsingResultEnum.partially
        )
      : undefined;
    const notSupported = log?.count
      ? log.count(
          (x) =>
            x.keyParsingResultEnum === KeyParsingResultEnum.notSupported ||
            x.keyParsingResultEnum === KeyParsingResultEnum.error
        )
      : undefined;

    function toggleSuccess() {
      filterState[KeyParsingResultEnum.success] =
        !filterState[KeyParsingResultEnum.success];
      filterToggle &&
        filterToggle(
          KeyParsingResultEnum.success,
          filterState[KeyParsingResultEnum.success]
        );
      setFilterState({ ...filterState });
    }
    function togglePartially() {
      filterState[KeyParsingResultEnum.partially] =
        !filterState[KeyParsingResultEnum.partially];
      filterToggle &&
        filterToggle(
          KeyParsingResultEnum.partially,
          filterState[KeyParsingResultEnum.partially]
        );
      setFilterState({ ...filterState });
    }
    function toggleNotSupported() {
      filterState[KeyParsingResultEnum.notSupported] =
        !filterState[KeyParsingResultEnum.notSupported];
      filterToggle &&
        filterToggle(
          KeyParsingResultEnum.notSupported,
          filterState[KeyParsingResultEnum.notSupported]
        );
      setFilterState({ ...filterState });
    }

    return (
      <FiltersContainer>
        <ReportFilterItemPolicyConvertControl
          text={"Successfully converted"}
          value={success}
          color="rgba(26, 164, 3, 1)"
          active={filterState[KeyParsingResultEnum.success]}
          onClick={() => success && toggleSuccess()}
        />
        <ReportFilterItemPolicyConvertControl
          text={"Partially converted"}
          value={partially}
          color="rgba(255, 173, 75, 1)"
          active={filterState[KeyParsingResultEnum.partially]}
          onClick={() => partially && togglePartially()}
        />
        <ReportFilterItemPolicyConvertControl
          text={"Not supported"}
          color="rgba(194, 0, 0, 1)"
          value={notSupported}
          active={filterState[KeyParsingResultEnum.notSupported]}
          onClick={() => notSupported && toggleNotSupported()}
        />
      </FiltersContainer>
    );
  };
