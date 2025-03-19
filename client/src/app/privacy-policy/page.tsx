import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - MMasters",
  description:
    "Privacy policy for MMasters explaining how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>
      <p className="mb-8 text-sm text-zinc-400">Last Updated: March 9, 2025</p>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">1. Introduction</h2>
        <p className="mb-4">
          MMasters (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) values
          your privacy and is committed to protecting your personal information.
          This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you use our website (mmasters.live)
          and services (collectively, the &quot;Service&quot;).
        </p>
        <p className="mb-4">
          By accessing or using our Service, you consent to the practices
          described in this Privacy Policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          2. Information We Collect
        </h2>

        <h3 className="mb-3 text-xl font-medium">
          2.1 Personal Information You Provide
        </h3>
        <p className="mb-3">
          We may collect personal information that you voluntarily provide when
          using our Service, including:
        </p>
        <ul className="mb-4 list-disc space-y-1 pl-6">
          <li>Contact information (name, email address)</li>
          <li>Account credentials (username, password)</li>
          <li>Profile information</li>
          <li>Communication content (messages, feedback, support requests)</li>
          <li>
            Payment information (handled securely through third-party
            processors)
          </li>
        </ul>

        <h3 className="mb-3 text-xl font-medium">
          2.2 Information Collected Automatically
        </h3>
        <p className="mb-3">
          When you visit our Service, we may automatically collect certain
          information, including:
        </p>
        <ul className="mb-4 list-disc space-y-1 pl-6">
          <li>Usage data (pages visited, time spent, actions taken)</li>
          <li>
            Device information (IP address, browser type, operating system)
          </li>
          <li>Location data (country, region)</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          3. How We Use Your Information
        </h2>
        <p className="mb-3">
          We use your information for the following purposes:
        </p>
        <ul className="mb-4 list-disc space-y-1 pl-6">
          <li>Provide, maintain, and improve our Service</li>
          <li>Process transactions and send related information</li>
          <li>Respond to your inquiries and provide customer support</li>
          <li>Send administrative information and service updates</li>
          <li>Personalize your experience and deliver relevant content</li>
          <li>Monitor and analyze usage patterns and trends</li>
          <li>Detect, prevent, and address technical or security issues</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          4. Cookies and Tracking Technologies
        </h2>
        <p className="mb-4">
          We use cookies, web beacons, and similar technologies to enhance your
          experience, gather usage information, and enable certain Service
          functionality. You can control cookies through your browser settings,
          although disabling cookies may limit your ability to use certain
          features of our Service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          5. Information Sharing and Disclosure
        </h2>
        <p className="mb-3">We may share your information with:</p>
        <ul className="mb-4 list-disc space-y-1 pl-6">
          <li>
            <strong>Service Providers</strong>: Third parties that help us
            operate our business and deliver services
          </li>
          <li>
            <strong>Compliance with Laws</strong>: When required to comply with
            applicable laws, regulations, or legal processes
          </li>
          <li>
            <strong>Business Transfers</strong>: In connection with a merger,
            acquisition, reorganization, or sale of all or a portion of our
            assets
          </li>
          <li>
            <strong>With Your Consent</strong>: When you have provided consent
            for certain disclosures
          </li>
          <li>
            <strong>Protection of Rights</strong>: To protect our rights,
            property, or safety, or that of our users or others
          </li>
        </ul>
        <p className="mb-4">
          We do not sell your personal information to third parties.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">6. Data Security</h2>
        <p className="mb-4">
          We implement appropriate technical and organizational measures to
          protect your personal information. However, no method of transmission
          over the Internet or electronic storage is 100% secure, and we cannot
          guarantee absolute security.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">7. Your Privacy Rights</h2>
        <p className="mb-3">
          Depending on your location, you may have certain rights regarding your
          personal information, including:
        </p>
        <ul className="mb-4 list-disc space-y-1 pl-6">
          <li>Access and obtain a copy of your personal information</li>
          <li>Correct inaccurate or incomplete information</li>
          <li>Delete your personal information</li>
          <li>Object to or restrict certain processing</li>
          <li>Data portability</li>
          <li>Withdraw consent</li>
        </ul>
        <p className="mb-4">
          To exercise these rights, please contact us using the information
          provided in the &quot;Contact Us&quot; section.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          8. International Data Transfers
        </h2>
        <p className="mb-4">
          Your information may be transferred to and processed in countries
          other than your country of residence. We take appropriate safeguards
          to ensure your information remains protected in accordance with this
          Privacy Policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          9. Children&apos;s Privacy
        </h2>
        <p className="mb-4">
          Our Service is not directed to children under the age of 13. We do not
          knowingly collect personal information from children. If you believe
          we have collected information from a child, please contact us
          immediately.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          10. Third-Party Links and Services
        </h2>
        <p className="mb-4">
          Our Service may contain links to third-party websites or services that
          are not owned or controlled by us. This Privacy Policy applies only to
          our Service. We recommend reviewing the privacy policies of any
          third-party services you access.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          11. Updates to This Privacy Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page and
          updating the &quot;Last Updated&quot; date. You are advised to review
          this Privacy Policy periodically for any changes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          12. GDPR Compliance (For EEA Users)
        </h2>
        <p className="mb-3">
          For users in the European Economic Area (EEA), we comply with the
          General Data Protection Regulation (GDPR). The legal bases for
          processing your information include:
        </p>
        <ul className="mb-4 list-disc space-y-1 pl-6">
          <li>Your consent</li>
          <li>Performance of a contract</li>
          <li>Legitimate interests</li>
          <li>Compliance with legal obligations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          13. California Privacy Rights
        </h2>
        <p className="mb-4">
          California residents have certain rights under the California Consumer
          Privacy Act (CCPA) and California Privacy Rights Act (CPRA),
          including:
        </p>
        <ul className="mb-4 list-disc space-y-1 pl-6">
          <li>
            Right to know what personal information is collected, used, shared,
            or sold
          </li>
          <li>Right to delete personal information</li>
          <li>Right to opt-out of the sale of personal information</li>
          <li>Right to non-discrimination for exercising CCPA rights</li>
        </ul>
        <p className="mb-4">
          To exercise these rights, please contact us using the information
          below.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">14. Contact Us</h2>
        <p className="mb-4">
          If you have questions or concerns about this Privacy Policy or our
          data practices, please contact us at:
        </p>
        <p className="mb-2">
          <strong>Email</strong>: support@mmasters.live
        </p>
        <p className="mb-4">
          You can also reach us through our{" "}
          <a
            href="/contact"
            className="text-indigo-400 hover:text-indigo-300 hover:underline"
          >
            contact form
          </a>
          .
        </p>
      </section>

      <hr className="my-8 border-zinc-800" />

      <p className="text-sm text-zinc-400">
        By using our Service, you acknowledge that you have read and understood
        this Privacy Policy.
      </p>
    </div>
  );
}
