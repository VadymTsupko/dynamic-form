import { useGetFormConfigQuery } from "./formApiSlice"
import FormSkeleton from "./Skeleton"
import FormErrorMessage from "./ErrorMessage"
import Form from "./Form"

const DynamicForm = () => {
  const { data, isError, isLoading, isSuccess, error } =
    useGetFormConfigQuery(undefined)

  if (isError) {
    console.error("Form error", error)

    return <FormErrorMessage />
  }

  if (isLoading) {
    return <FormSkeleton />
  }

  if (isSuccess) {
    return <Form fields={data.fields} />
  }

  return null
}

export default DynamicForm
