import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const PaymentSummary = ({ data }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const state = location.state;

  return (
    <div
      className={
        "bg-primary-50 p-4 rounded-2xl flex flex-col gap-8 w-full sm:basis-[50%] shadow-sm grow-0 min-w-0"
      }
    >
      <h1 className={"font-bold text-2xl"}>{t("checkout.summary")}</h1>
      <div className={"flex flex-col gap-2 min-w-0"}>
        <div
          className={
            "flex flex-row justify-between items-start gap-[1rem] min-w-0"
          }
        >
          <label className={"flex-1 font-semibold"}>
            {t("checkout.bundleName")}
          </label>
          <p
            dir={"ltr"}
            className={`flex-1 font-bold truncate ${
              localStorage.getItem("i18nextLng") === "en"
                ? "text-right"
                : "text-left"
            }`}
          >
            {data?.display_title || t("common.notAvailable")}
          </p>
        </div>
        <div className={"flex flex-row justify-between items-start gap-[1rem]"}>
          <label className={"flex-1 font-semibold"}>
            {t("checkout.subtotal")}
          </label>
          <p
            dir={"ltr"}
            className={`flex-1 font-bold ${
              localStorage.getItem("i18nextLng") === "en"
                ? "text-right"
                : "text-left"
            }`}
          >
            {state?.new_price_display || data?.price_display}
          </p>
        </div>
      </div>
      <hr />
      <div className={"flex flex-row justify-between items-start gap-[1rem]"}>
        <label className={"font-semibold"}>{t("checkout.total")}</label>
        <p
          dir={"ltr"}
          className={`font-bold text-2xl ${
            localStorage.getItem("i18nextLng") === "en"
              ? "text-right"
              : "text-left"
          }`}
        >
          {state?.new_price_display || data?.price_display}
        </p>
      </div>
    </div>
  );
};

export default PaymentSummary;
