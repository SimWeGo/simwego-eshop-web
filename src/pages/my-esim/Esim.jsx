import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import Container from "../../components/Container";
import { getMyEsim } from "../../core/apis/userAPI";
import { useQuery } from "react-query";
import {
  CustomToggleButton,
  CustomToggleGroup,
} from "../../assets/CustomComponents";
import { Link, useSearchParams } from "react-router-dom";
import useQueryParams from "../../core/custom-hook/useQueryParams";
import NoDataFound from "../../components/shared/no-data-found/NoDataFound";
import { NoDataFoundSVG } from "../../assets/icons/Common";
import { Button, Skeleton } from "@mui/material";
import OrderCard from "../../components/order/OrderCard";

const Esim = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    expired: searchParams.get("expired") || "false",
  });

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["my-esim"],
    queryFn: () => getMyEsim().then((res) => res?.data?.data),
  });

  const handleQueryParams = useQueryParams(filters);

  const finalData = useMemo(() => {
    const filtersValue = filters?.expired === "false" ? false : true;
    return data?.filter((el) => el?.bundle_expired === filtersValue) || [];
  }, [filters?.expired, data]);

  useEffect(() => {
    handleQueryParams();
  }, [filters]);

  return (
    <div className="flex flex-col gap-[1rem]">
      <h1 className="font-bold">{t("esim.title")}</h1>
      <CustomToggleGroup
        color="primary"
        value={filters?.expired}
        onChange={(e) => {
          setFilters({ expired: e.target.value });
        }}
      >
        <CustomToggleButton value={"false"} sx={{ width: "150px" }}>
          {t("esim.current_plans")}
        </CustomToggleButton>
        <CustomToggleButton value={"true"} sx={{ width: "150px" }}>
          {t("esim.expired_plans")}
        </CustomToggleButton>
      </CustomToggleGroup>
      {isLoading ? (
        Array(4)
          .fill()
          ?.map((_, index) => (
            <Skeleton
              key={`esim-skeleton-${index}`}
              variant="rectangle"
              height={100}
              className={"rounded-md"}
            />
          ))
      ) : !data || finalData?.length === 0 ? (
        <NoDataFound
          action={
            filters?.expired === "false" ? (
              <Button
                sx={{ width: "fit-content" }}
                component={Link}
                variant="contained"
                to="/plans"
                color="primary"
              >
                {t("btn.shop_now")}
              </Button>
            ) : (
              ""
            )
          }
          image={<NoDataFoundSVG />}
          text={t(
            filters?.expired === "true"
              ? "noDataFound.no_expired_plans"
              : "noDataFound.no_active_plans"
          )}
        />
      ) : (
        finalData?.map((el, index) => (
          <OrderCard
            order={{ bundle_details: el }}
            key={`${el?.bundle_code}-${index}`}
            myesim
            refetchData={refetch}
          />
        ))
      )}
    </div>
  );
};

export default Esim;
