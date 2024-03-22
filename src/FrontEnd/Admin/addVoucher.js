import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const addVoucher = () => {
  const api = `https://api.shyft.to/sol/v2/nft/create`;
  const apiKey = "nTAETNpPo6oEoFHO"
  const queryClient = QueryClient();
  const headers = {
    "x-api-key": apiKey,
  };
  // Queries
  const query = useQuery({
    queryKey: ["VOUCHER"],
    queryFn: async () => {
      const response = await axios.post(api,{headers});
      return response.data;
    },
  });

  // Mutations
  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["VOUCHER"] });
    },
  });

  return <div>addVoucher</div>;
};

export default addVoucher;
