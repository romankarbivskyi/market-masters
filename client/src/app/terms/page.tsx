import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | MMasters",
  description:
    "Terms and conditions for using the MMasters platform and services.",
};

export default function TermsOfService() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Terms of Service</h1>
      <p className="mb-8 text-sm text-zinc-400">Last Updated: March 9, 2025</p>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">1. Introduction</h2>
        <p className="mb-4">
          Welcome to MMasters (&quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;). These Terms of Service (&quot;Terms&quot;) govern
          your access to and use of the MMasters website, applications, and
          services (collectively, the &quot;Service&quot;).
        </p>
        <p className="mb-4">
          By accessing or using our Service, you agree to be bound by these
          Terms. If you disagree with any part of the Terms, you do not have
          permission to access the Service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">2. Service Description</h2>
        <p className="mb-4">
          MMasters provides analytics tools and data related to cryptocurrency
          trading, market makers, and blockchain networks. Our Service includes
          trading performance data, market analysis, and related insights.
        </p>
        <p className="mb-4">
          We may add, modify, suspend, or discontinue any aspect of the Service
          at any time, including the availability of any feature or content,
          without prior notice or liability.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">3. User Accounts</h2>
        <p className="mb-4">
          Some features of our Service may require you to create an account. You
          are responsible for maintaining the confidentiality of your account
          credentials and for all activities that occur under your account.
        </p>
        <p className="mb-4">
          You agree to notify us immediately of any unauthorized use of your
          account. We reserve the right to refuse service, terminate accounts,
          or remove content at our sole discretion.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          4. User Responsibilities
        </h2>
        <h3 className="mb-3 text-xl font-medium">4.1 Acceptable Use</h3>
        <p className="mb-4">
          You agree to use the Service only for lawful purposes and in
          accordance with these Terms. You agree not to:
        </p>
        <ul className="mb-4 list-disc space-y-1 pl-6">
          <li>
            Use the Service in any way that violates any applicable law or
            regulation
          </li>
          <li>
            Attempt to interfere with the proper functioning of the Service
          </li>
          <li>
            Bypass or attempt to bypass any measures we use to restrict access
            to the Service
          </li>
          <li>
            Collect or harvest any information from the Service without our
            express permission
          </li>
          <li>Use automated scripts or bots to access the Service</li>
          <li>
            Impersonate another person or misrepresent your affiliation with any
            person or entity
          </li>
        </ul>

        <h3 className="mb-3 text-xl font-medium">4.2 Content</h3>
        <p className="mb-4">
          You are solely responsible for any content you submit, post, or
          display on or through the Service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          5. Intellectual Property
        </h2>
        <p className="mb-4">
          The Service and its original content, features, and functionality are
          owned by MMasters and are protected by international copyright,
          trademark, patent, trade secret, and other intellectual property laws.
        </p>
        <p className="mb-4">
          You may not copy, modify, create derivative works from, publicly
          display, republish, or distribute any material from our Service
          without our prior written consent.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          6. Third-Party Links and Services
        </h2>
        <p className="mb-4">
          Our Service may contain links to third-party websites or services that
          are not owned or controlled by us. We have no control over, and assume
          no responsibility for, the content, privacy policies, or practices of
          any third-party websites or services.
        </p>
        <p className="mb-4">
          Your use of such websites and services is subject to the terms and
          conditions of those services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">7. Disclaimers</h2>
        <p className="mb-4 font-medium uppercase">
          THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES
          OF ANY KIND, EITHER EXPRESS OR IMPLIED.
        </p>
        <p className="mb-4">
          We do not warrant that the Service will be uninterrupted or
          error-free, that defects will be corrected, or that the Service is
          free of viruses or other harmful components.
        </p>
        <p className="mb-4 font-medium">
          The information provided through our Service is for informational
          purposes only and should not be considered financial, investment, tax,
          or legal advice.
        </p>
        <p className="mb-4">
          Past performance is not indicative of future results. Cryptocurrency
          trading involves significant risk, and you should carefully consider
          your financial situation and risk tolerance before trading
          cryptocurrencies.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          8. Limitation of Liability
        </h2>
        <p className="mb-4 font-medium uppercase">
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL MMASTERS BE
          LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
          PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO YOUR USE OF THE
          SERVICE.
        </p>
        <p className="mb-4">
          This includes, but is not limited to, damages for loss of profits,
          goodwill, use, data, or other intangible losses, even if we have been
          advised of the possibility of such damages.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">9. Indemnification</h2>
        <p className="mb-4">
          You agree to defend, indemnify, and hold harmless MMasters, its
          affiliates, and their respective officers, directors, employees, and
          agents from and against any claims, liabilities, damages, losses, and
          expenses, including reasonable attorneys&apos; fees, arising out of or
          in any way connected with your access to or use of the Service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">10. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right to modify or replace these Terms at any time. If
          a revision is material, we will provide at least 30 days&apos; notice
          before the changes take effect by posting a notice on our website.
        </p>
        <p className="mb-4">
          Your continued use of the Service after any changes to the Terms
          constitutes your acceptance of the revised Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">11. Termination</h2>
        <p className="mb-4">
          We may terminate or suspend your access to the Service immediately,
          without prior notice or liability, for any reason whatsoever,
          including, without limitation, breach of these Terms.
        </p>
        <p className="mb-4">
          All provisions of the Terms that by their nature should survive
          termination shall survive, including, without limitation, ownership
          provisions, warranty disclaimers, indemnity, and limitations of
          liability.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">12. Governing Law</h2>
        <p className="mb-4">
          These Terms shall be governed and construed in accordance with the
          laws of [Your Jurisdiction], without regard to its conflict of law
          provisions.
        </p>
        <p className="mb-4">
          Any disputes arising under or in connection with these Terms shall be
          subject to the exclusive jurisdiction of the courts in [Your
          Jurisdiction].
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">13. Severability</h2>
        <p className="mb-4">
          If any provision of these Terms is held to be invalid or
          unenforceable, such provision shall be struck and the remaining
          provisions shall be enforced.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">14. Contact Information</h2>
        <p className="mb-4">
          If you have any questions about these Terms, please contact us at:
        </p>
        <p className="mb-2">
          <strong>Email</strong>: support@mmasters.live
        </p>
      </section>

      <hr className="my-8 border-zinc-800" />

      <p className="text-sm text-zinc-400">
        By using our Service, you acknowledge that you have read and agreed to
        these Terms of Service.
      </p>
    </div>
  );
}
