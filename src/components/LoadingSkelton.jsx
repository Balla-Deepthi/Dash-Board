import React from 'react'
import { Skeleton } from "@/components/ui/skeleton";

function LoadingSkelton() {
    const [loading, setLoading] = useState(true);

useEffect(() => {
  setTimeout(() => setLoading(false), 1000);
}, []);

return loading ? (
  <Skeleton className="h-20 w-full" />
) : (
  <ActualTableComponent />
);
  
}

export default LoadingSkelton
