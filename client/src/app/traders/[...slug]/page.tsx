import TopTradersTable from "@/components/TopTradersTable";
import { fetchPair, fetchTopTraders } from "@/services/api";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const [network, address] = (await params)?.slug;

  const { data } = await fetchPair(network, address);

  if (!data.success) {
    return {
      title: "Pair not found",
    };
  }

  return {
    title: "MMasters | Top Traders for " + data.data.id.pair,
    description: `Top traders for ${data.data.id.pair} pair on ${data.data.id.chain}`,
  };
}

export default async function Page({ params }: PageProps) {
  const [network, address] = (await params)?.slug;

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
