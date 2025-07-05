import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const FormSkeleton = () => {
  return (
    <Stack spacing={2}>
      <Skeleton
        variant="rounded"
        height={56}
      />

      <Skeleton
        variant="rounded"
        height={56}
      />

      <Skeleton
        variant="rounded"
        height={56}
      />

      <Skeleton
        variant="rounded"
        height={36}
      />
    </Stack>
  );
};

export default FormSkeleton;
