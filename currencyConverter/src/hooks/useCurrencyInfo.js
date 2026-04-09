import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        if (!currency) return;

        fetch(`https://open.er-api.com/v6/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => {
                if (res.result === "success") {
                    setData(res.rates); // ✅ correct data
                }
            })
            .catch((err) => console.log("ERROR:", err));
    }, [currency]);

    return data;
}

export default useCurrencyInfo;