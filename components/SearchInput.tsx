"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import useDebounce from "@/hooks/useDebounce";

const SearchInput = () => {
    const router = useRouter();
    const [value, setValue] = useState<string>("");
    const debouncedValue=  useDebounce<string>(value, 500);

    return ( 
        <div className="">Search Input</div>
     );
}
 
export default SearchInput;