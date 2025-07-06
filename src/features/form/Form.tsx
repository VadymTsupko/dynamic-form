import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FieldGenerator from "./FieldGenerator";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";
import { useCallback, useEffect } from "react";
import { Operator, type VisibleIf, type Field } from "../../utils/types";

type FormValues = Record<string, unknown>;
const Form = ({ fields }: { fields: Field[] }) => {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    resetField,
    clearErrors,
    formState: { isSubmitting }
  } = useForm();

  const watchAllFields = watch();

  const checkVisibility = useCallback(
    (condition: VisibleIf) => {
      switch (condition.operator) {
        case Operator.Equal:
          return watchAllFields[condition.field] == condition.value;
        case Operator.NotEqual:
          return watchAllFields[condition.field] != condition.value;
        case Operator.GreaterThan:
          return watchAllFields[condition.field] > condition.value;
        case Operator.LessThan:
          return watchAllFields[condition.field] < condition.value;
        case Operator.GreaterThanOrEqual:
          return watchAllFields[condition.field] >= condition.value;
        case Operator.LessThanOrEqual:
          return watchAllFields[condition.field] <= condition.value;

        default:
          return false;
      }
    },
    [watchAllFields]
  );

  useEffect(() => {
    reset();
  }, []);

  useEffect(() => {
    const resetUnusedFields = () => {
      fields.forEach((f) => {
        if (f.visibleIf) {
          if (!checkVisibility(f.visibleIf)) {
            if (watchAllFields[f.id]) {
              clearErrors(f.id);
              resetField(f.id);
            }
          }
        }
      });
    };

    resetUnusedFields();
  }, [checkVisibility, fields, resetField, watchAllFields, clearErrors]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (Object.keys(data).length === 0) {
      alert("Please fill in the form");
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={(event) => {
        void handleSubmit(onSubmit)(event);
      }}
    >
      <Stack spacing={2}>
        <hr />
        <div>data: {JSON.stringify(watchAllFields)}</div>
        <hr />

        {fields.map((fieldProps) => (
          <Controller
            key={fieldProps.id}
            name={fieldProps.id}
            control={control}
            defaultValue=""
            rules={
              watchAllFields.subscribe && fieldProps.id === "email"
                ? {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      message: "Invalid email address"
                    }
                  }
                : {}
            }
            disabled={
              fieldProps.visibleIf && !checkVisibility(fieldProps.visibleIf)
            }
            render={({ field, fieldState: { invalid, error } }) =>
              fieldProps.visibleIf && !checkVisibility(fieldProps.visibleIf) ? (
                <></>
              ) : (
                FieldGenerator(fieldProps, field, invalid, error)
              )
            }
          />
        ))}

        <Button
          variant="contained"
          type="submit"
          loading={isSubmitting}
          loadingIndicator="Sending data..."
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default Form;
