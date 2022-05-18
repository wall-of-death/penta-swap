import { useCurrencyBalance } from "@/features/Currency/hooks/useCurrencyBalance";
import { Currency, Token } from "@penta-swap/sdk";
import { BigNumber } from "ethers";

export const CurrencyBalance: React.VFC<{ currency: Token | Currency }> = ({
  currency,
}) => {
  const { data: balance, isLoading } = useCurrencyBalance(currency);

  if (balance) {
    return (
      <div className="font-bold text-lg">
        {balance.div(BigNumber.from(10).pow(currency.decimals)).toString()}
      </div>
    );
  } else if (isLoading) {
    return <div className="font-bold text-lg">loading...</div>;
  } else {
    return <></>;
  }
};