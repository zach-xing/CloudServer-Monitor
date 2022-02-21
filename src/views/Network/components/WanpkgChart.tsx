import { Box, Typography } from "@mui/material";
import { useQuery } from "react-query";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { fetchWanpkg } from "../../../api/network";
import { toTime } from "../../../utils/formatNumber";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

/**
 * 外网出入包量
 */
const WanpkgChart = () => {
 const {
   status,
   data: WanpkgData,
   error,
 } = useQuery<any>("WanpkgData", async () => {
   const res: any = await fetchWanpkg();

   return {
     labels: res.timestamps.map((timestamp: number) => toTime(timestamp)),
     datasets: [
       {
         label: "外网出包量",
         data: res.outValue,
         borderColor: "rgb(75, 192, 192)",
         backgroundColor: "rgb(165, 223, 223)",
       },
       {
         label: "外网入包量",
         data: res.inValue,
         borderColor: "rgb(53, 162, 235)",
         backgroundColor: "rgba(53, 162, 235, 0.5)",
       },
     ],
   };
 });

 if (status === "loading") return <h2>Loading...</h2>;
 if (status === "error") {
   return <h2>Error:{JSON.stringify(error, null, 2)}</h2>;
 }

 return (
   <>
     <Box sx={{ pt: 5 }}>
       <Typography variant="h5">外网出入包量 (个/s)</Typography>
     </Box>
     <Line
       height={70}
       options={{
         responsive: true,
         plugins: {
           legend: {
             position: "top" as const,
           },
           title: {
             display: true,
             text: "外网出入包量",
           },
         },
       }}
       data={WanpkgData}
     />
   </>
 );
};

export default WanpkgChart;
