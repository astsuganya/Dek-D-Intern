const CheckboxIcon = () => {
    return (
        <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-2 left-2.5 w-4 h-4 text-white hidden peer-checked:block -translate-x-1/2 -translate-y-1/2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
    );
};

export default CheckboxIcon