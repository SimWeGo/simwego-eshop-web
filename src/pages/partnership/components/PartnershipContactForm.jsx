import React, { useState } from "react";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Container from "../../../components/Container";
import {
  FormInput,
  FormTextArea,
} from "../../../components/shared/form-components/FormComponents";
import { contactUs } from "../../../core/apis/homeAPI";
import { toast } from "react-toastify";
import { ConnectSVG } from "../../../assets/icons/Home";
import { Button, TextField, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";

const schema = ({ t }) =>
  yup.object().shape({
    firstName: yup
      .string()
      .label(t("partnership.contact.firstName"))
      .required(t("partnership.contact.firstNameRequired"))
      .nullable(),
    lastName: yup
      .string()
      .label(t("partnership.contact.lastName"))
      .required(t("partnership.contact.lastNameRequired"))
      .nullable(),
    email: yup
      .string()
      .label("Email")
      .email(t("profile.errors.emailInvalid"))
      .required(`${t("checkout.emailRequired")}`)
      .nullable(),
    phoneNumber: yup
      .string()
      .label(t("partnership.contact.phoneNumber"))
      .required(t("partnership.contact.phoneRequired"))
      .nullable(),
    company: yup
      .string()
      .label(t("partnership.contact.company"))
      .required(t("partnership.contact.companyRequired"))
      .nullable(),
    jobRole: yup
      .string()
      .label(t("partnership.contact.jobRole"))
      .required(t("partnership.contact.jobRoleRequired"))
      .nullable(),
    partnershipType: yup
      .string()
      .label(t("partnership.contact.partnershipType"))
      .required(t("partnership.contact.partnershipTypeRequired"))
      .oneOf(["api", "affiliation", "whitelabel"], "Invalid partnership type")
      .nullable(),
    content: yup
      .string()
      .label("Message")
      .required(`${t("contactUs.messageRequired")}`)
      .nullable()
      .max(
        500,
        t("errors.maxCharacter", {
          field: t("contactUs.message"),
          character: 500,
        })
      ),
  });

const PartnershipContactForm = () => {
  const { t } = useTranslation();
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      company: "",
      jobRole: "",
      partnershipType: "",
      content: "",
    },
    resolver: yupResolver(schema({ t })),
    mode: "all",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitForm = async (payload) => {
    setIsSubmitting(true);

    const formattedPayload = {
      ...payload,
      content: `Partnership Inquiry:
      
Name: ${payload.firstName} ${payload.lastName}
Company: ${payload.company}
Job Role: ${payload.jobRole}
Phone: ${payload.phoneNumber}
Partnership Type: ${payload.partnershipType}

Message: ${payload.content}`
    };

    contactUs(formattedPayload)
      .then((res) => {
        if (res?.data?.status === "success") {
          toast.success(t("partnership.contact.success"));
        } else {
          toast.error(res?.message);
        }
      })
      .catch((e) => {
        toast?.error(e?.message || t("partnership.contact.failed"));
      })
      .finally(() => {
        reset({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          company: "",
          jobRole: "",
          partnershipType: "",
          content: "",
        });
        setIsSubmitting(false);
      });
  };

  const partnershipTypes = [
    { value: "api", label: t("partnership.contact.partnershipTypes.api") },
    { value: "affiliation", label: t("partnership.contact.partnershipTypes.affiliation") },
    { value: "whitelabel", label: t("partnership.contact.partnershipTypes.whitelabel") }
  ];

  return (
    <section className="bg-white py-32 rounded-3xl shadow-lg mx-4 mt-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center items-end mb-4">
              <ConnectSVG flip={localStorage.getItem("i18nextLng") === "ar"} />
              <p className="font-semibold text-content-600 text-lg ml-2">
                {t("partnership.contact.inquiryLabel")}
              </p>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              {t("partnership.contact.title")}
            </h2>
            <p className="text-gray-600 text-lg">
              {t("partnership.contact.subtitle")}
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("partnership.contact.firstName")} *
                </label>
                <Controller
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <FormInput
                      placeholder={t("partnership.contact.enterFirstName")}
                      value={value}
                      helperText={error?.message}
                      onChange={(value) => onChange(value)}
                    />
                  )}
                  name="firstName"
                  control={control}
                />
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("partnership.contact.lastName")} *
                </label>
                <Controller
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <FormInput
                      placeholder={t("partnership.contact.enterLastName")}
                      value={value}
                      helperText={error?.message}
                      onChange={(value) => onChange(value)}
                    />
                  )}
                  name="lastName"
                  control={control}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("checkout.email")} *
                </label>
                <Controller
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <FormInput
                      placeholder={t("checkout.enterEmail")}
                      value={value}
                      helperText={error?.message}
                      onChange={(value) => onChange(value)}
                    />
                  )}
                  name="email"
                  control={control}
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("partnership.contact.phoneNumber")} *
                </label>
                <Controller
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <FormInput
                      placeholder={t("partnership.contact.enterPhone")}
                      value={value}
                      helperText={error?.message}
                      onChange={(value) => onChange(value)}
                    />
                  )}
                  name="phoneNumber"
                  control={control}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("partnership.contact.company")} *
                </label>
                <Controller
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <FormInput
                      placeholder={t("partnership.contact.enterCompany")}
                      value={value}
                      helperText={error?.message}
                      onChange={(value) => onChange(value)}
                    />
                  )}
                  name="company"
                  control={control}
                />
              </div>

              {/* Job Role */}
              <div>
                <label
                  htmlFor="jobRole"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("partnership.contact.jobRole")} *
                </label>
                <Controller
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <FormInput
                      placeholder={t("partnership.contact.enterJobRole")}
                      value={value}
                      helperText={error?.message}
                      onChange={(value) => onChange(value)}
                    />
                  )}
                  name="jobRole"
                  control={control}
                />
              </div>
            </div>

            {/* Partnership Type */}
            <div>
              <label
                htmlFor="partnershipType"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {t("partnership.contact.partnershipType")} *
              </label>
              <Controller
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    select
                    fullWidth
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    helperText={error?.message}
                    size="small"
                    displayEmpty
                    SelectProps={{
                      displayEmpty: true,
                      renderValue: (selected) => {
                        if (selected === "") {
                          return <em style={{ color: '#c2c2c2', fontStyle: 'normal' }}>{t("partnership.contact.selectPartnershipType")}</em>;
                        }
                        const selectedType = partnershipTypes.find(type => type.value === selected);
                        return selectedType ? selectedType.label : selected;
                      }
                    }}
                  >
                    <MenuItem value="" disabled>
                      {t("partnership.contact.selectPartnershipType")}
                    </MenuItem>
                    {partnershipTypes.map((type) => (
                      <MenuItem key={type.value} value={type.value}>
                        {type.label}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
                name="partnershipType"
                control={control}
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {t("contactUs.message")} *
              </label>
              <Controller
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <FormTextArea
                    rows={6}
                    value={value}
                    onChange={(value) => onChange(value)}
                    placeholder={t("partnership.contact.messagePartnership")}
                    helperText={error?.message}
                  />
                )}
                name="content"
                control={control}
              />
            </div>

            <div className="flex justify-center">
              <Button
                sx={{ 
                  width: "fit-content", 
                  padding: "12px 32px",
                  fontSize: "16px",
                  fontWeight: "600"
                }}
                type="submit"
                variant="contained"
                className="action-button"
                disabled={isSubmitting}
                size="large"
              >
                {isSubmitting ? t("partnership.contact.sending") : t("partnership.contact.sendInquiry")}
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default PartnershipContactForm;