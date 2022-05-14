import { useEffect, useState } from "react";
import CommunityService from "../services/community-service/community-service";
import { ApiCallback } from "../models/ApiCallback";

export function useFetchCommunity() {
  // TODO: implement community interface here
  const [community, setCommunity] = useState<ApiCallback<any[]>>({
    error: false,
    loading: true,
    data: [],
  });

  useEffect(() => {
    CommunityService.getInstance()
      ?.getCommunity()
      .then((response) => response.json())
      .then((data) => {
        setCommunity({ ...community, data, loading: false });
      })
      .catch((error) => setCommunity({ ...community, error, loading: false }));
  });

  return community;
}
