/* eslint-disable react/prop-types */
import TableData from "./TableData";
import TableHeader from "./TableHeader";

import TableRow from "./TableRow";

function SubscriptionsTable({ data }) {
  const price = data.map((el) => el.Price);
  const content = data.map((el) => el.Content);
  const devices = data.map((el) => el.Devices);
  const freeTrail = data.map((el) => el["Free Trail"]);
  const cancelAnytime = data.map((el) => el["Cancel Anytime"]);
  const HDR = data.map((el) => el.HDR);
  const dolbyAtmos = data.map((el) => el["Dolby Atmos"]);
  const adFree = data.map((el) => el["Ad - Free"]);
  const offlineViewing = data.map((el) => el["Offline Viewing"]);

  return (
    <>
      <table
        className="w-full overflow-hidden rounded-[10px] border-[.5px] border-black-shade-5 max-md:hidden"
        id="subscription"
      >
        <TableRow>
          <TableHeader className="rounded-ss-[10px]">Features</TableHeader>
          <TableHeader>{data[0].type}</TableHeader>
          <TableHeader>
            <span>{data[1].type}</span>
            <span className="ml-2 max-h-[22px] min-w-[63px] rounded-sm bg-red-shade-1 px-[6px] py-0.5 text-sm font-medium">
              Popular
            </span>
          </TableHeader>
          <TableHeader className="rounded-se-[10px]">
            {data[2].type}
          </TableHeader>
        </TableRow>

        <TableRow>
          <TableData>Price</TableData>
          {price.map((el) => (
            <TableData key={el}>{el}</TableData>
          ))}
        </TableRow>

        <TableRow>
          <TableData>Content</TableData>
          {content.map((el) => (
            <TableData key={el}>{el}</TableData>
          ))}
        </TableRow>

        <TableRow>
          <TableData>Devices</TableData>
          {devices.map((el) => (
            <TableData key={el}>{el}</TableData>
          ))}
        </TableRow>

        <TableRow>
          <TableData>Free Trail</TableData>
          {freeTrail.map((el) => (
            <TableData key={el}>{el}</TableData>
          ))}
        </TableRow>

        <TableRow>
          <TableData>Cancel Anytime</TableData>
          {cancelAnytime.map((el) => (
            <TableData key={el}>{el}</TableData>
          ))}
        </TableRow>

        <TableRow>
          <TableData>HDR</TableData>
          {HDR.map((el) => (
            <TableData key={el}>{el}</TableData>
          ))}
        </TableRow>

        <TableRow>
          <TableData>Dolby Atmos</TableData>
          {dolbyAtmos.map((el) => (
            <TableData key={el}>{el}</TableData>
          ))}
        </TableRow>

        <TableRow>
          <TableData>Ad - Free</TableData>
          {adFree.map((el) => {
            return <TableData key={el}>{el}</TableData>;
          })}
        </TableRow>

        <TableRow>
          <TableData>Offline Viewing</TableData>
          {offlineViewing.map((el) => {
            return <TableData key={el}>{el}</TableData>;
          })}
        </TableRow>

        <TableRow>
          <TableData className="rounded-es-[10px]">Family Sharing</TableData>
          <TableData>{data[0]["Family Sharing"]}</TableData>
          <TableData>{data[1]["Family Sharing"]}</TableData>
          <TableData className="rounded-ee-[10px]">
            {data[2]["Family Sharing"]}
          </TableData>
        </TableRow>
      </table>
    </>
  );
}

export default SubscriptionsTable;
