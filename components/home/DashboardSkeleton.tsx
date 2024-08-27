import { Skeleton } from "../ui/skeleton";

const DashboardSkeleton = () => {
  return (
    <div className="w-full flex flex-col flex-1 p-3 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-4 w-60 mt-2" />
        </div>
        <div className="flex gap-3 items-center">
          <Skeleton className="h-10 w-40" />
          <Skeleton className="h-10 w-28" />
          <Skeleton className="h-10 w-10" />
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-between gap-7">
        <div className="w-full flex gap-10 h-screen">
          <div className="h-full flex flex-[2.5] flex-col gap-4">
            <Skeleton className="h-20 w-56" />
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-2 lg:gap-5">
              {Array.from({ length: 6 }).map((_, index) => (
                <Skeleton key={index} className="h-28 w-full" />
              ))}
            </div>
            <Skeleton className="h-56 w-full mt-5" />
            <div className="flex flex-col gap-5">
              <Skeleton className="h-6 w-56" />
              <div className="flex w-full justify-between flex-wrap lg:flex-nowrap gap-2 items-center">
                
                  <Skeleton  className="h-[30rem] w-full" />
                
              </div>
            </div>
            <Skeleton className="h-56 w-full mt-5" />
            <div className="flex flex-col gap-5">
              <Skeleton className="h-6 w-56" />
              <div className="flex w-full justify-between flex-wrap lg:flex-nowrap gap-2 items-center">
                {Array.from({ length: 4 }).map((_, index) => (
                  <Skeleton key={index} className="h-20 w-full" />
                ))}
              </div>
            </div>
            <Skeleton className="h-56 w-full mt-5" />
          </div>
          <div className="h-full flex flex-col flex-1 gap-6">
            <Skeleton className="h-[40rem] w-full" />
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton key={index} className="h-28 w-full mt-5" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSkeleton;
