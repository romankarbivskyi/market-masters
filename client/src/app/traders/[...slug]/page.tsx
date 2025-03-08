import TopTradersTable from "@/components/TopTradersTable";
import { fetchTopTraders } from "@/services/api";

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export default async function Page({ params }: PageProps) {
  const [network, address] = (await params)?.slug;

  if (
    !address ||
    !network ||
    typeof address !== "string" ||
    typeof network !== "string"
  ) {
    return <div>Missing required parameters</div>;
  }

  const { data } = await fetchTopTraders(network, address);

  if (!data.success) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <TopTradersTable
        tradersData={data.data.traders}
        network={data.data.network}
      />
    </div>
  );
}
