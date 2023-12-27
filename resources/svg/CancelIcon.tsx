const CancelIcon = ({
  width,
  height,
}: {
  width?: number | string;
  height?: number | string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "20"}
      height={height ? height : "20"}
      viewBox="0 0 16 16"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"
      />
    </svg>
  );
};

export default CancelIcon;
