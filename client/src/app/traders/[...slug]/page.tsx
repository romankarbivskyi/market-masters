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

  try {
    const { data } = await fetchPair(network, address);

    if (!data.success) {
      return {
        title: "Pair not found - MMasters",
        description: "The requested trading pair could not be found.",
      };
    }

    const pairName = data.data.id.pair;
    const chainName = data.data.id.chain;
    const title = `Top Traders for ${pairName} on ${chainName}`;
    const description = `Analyze top traders and market makers for the ${pairName} trading pair on ${chainName}. View performance metrics, trading strategies, and profitability data.`;

    return {
      title,
      description,
      openGraph: {
        title: `${title} - MMasters`,
        description,
        url: `https://mmasters.live/traders/${network}/${address}`,
        type: "website",
        images: [
          {
            url: "https://mmasters.live/logo.png",
            width: 1200,
            height: 630,
            alt: "Market Masters - Crypto Trading Analytics",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${title} - MMasters`,
        description,
        images: ["https://mmasters.live/logo.png"],
      },
      alternates: {
        canonical: `https://mmasters.live/traders/${network}/${address}`,
      },
      keywords: [
        `${pairName} traders`,
        `${chainName} trading`,
        "crypto trading analytics",
        "market makers",
        "DeFi analytics",
        `${pairName}`,
        "trading performance",
      ],
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "Error loading trader data - MMasters",
      description:
        "There was an error loading the trader information. Please try again later.",
    };
  }
}

export default async function Page({ params }: PageProps) {
  const [network, address] = (await params)?.slug;

  const { data } = await fetchTopTraders(network, address);

  if (!data.success) {
    return <div>No data available</div>;
  }

  return (
    <TopTradersTable
      tradersData={data.data.traders}
      network={data.data.network}
    />
  );
}
