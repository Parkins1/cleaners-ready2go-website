import LocationPageTemplate from './LocationPageTemplate';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import ContentCard from '@/components/ContentCard/ContentCard';

export default function Spokane() {
  const pageDetails = {
    locationName: 'Spokane',
    heroImage: 'https://via.placeholder.com/1920x1080',
    introText:
      "We are proud to offer our full range of cleaning services to the vibrant city of Spokane. From the historic Browne's Addition to the bustling downtown core, our team is ready to make your home or business shine.",
    services: [
      {
        title: 'Residential Cleaning',
        description: 'Weekly, bi-weekly, or monthly cleaning services to keep your home looking its best.',
      },
      {
        title: 'Commercial Cleaning',
        description: 'Customized cleaning plans for offices, retail spaces, and other commercial properties.',
      },
      {
        title: 'Move‑Out Cleaning',
        description: 'A thorough cleaning to ensure you get your deposit back and leave your old space spotless.',
      },
    ],
    serviceCardIds: ['residential','deep-cleaning','move-out','apartment-cleaning'] as const,
    testimonial: {
      quote: 'Cleaners Ready 2Go is the best cleaning service in Spokane! They are always professional and do an amazing job.',
      name: 'John D.',
    },
    extraSections: [
      {
        title: 'Proudly Serving Spokane & Nearby Communities',
        content: (
          <>
            <p>
              For over <strong>[X] years</strong>, <strong>Cleaners Ready 2Go</strong> has been a trusted presence in Spokane,
              serving families and homeowners with dependable, top‑quality cleaning services. We are deeply familiar with the
              unique needs of homes in the Inland Northwest   from the dust and pollen brought on by our dry summers to the mud and
              slush that come with snowy winters.
            </p>
            <p>
              Our service area covers the greater Spokane region, including Spokane Valley, Liberty Lake, Airway Heights, Cheney,
              and North Idaho communities such as Post Falls and Coeur d’Alene.
            </p>
          </>
        ),
      },
      {
        title: 'House Cleaning Services We Offer in Spokane',
        content: (
          <>
            <ul>
              <li><strong>Recurring Cleaning</strong> – weekly, bi‑weekly, or monthly visits.</li>
              <li><strong>Deep Cleaning</strong> – thorough cleaning of baseboards, behind appliances, inside cabinets, ceiling fans, etc.</li>
              <li><strong>Move‑In / Move‑Out Cleaning</strong> – perfect for rentals and new homeowners.</li>
              <li><strong>Apartment & Condo Cleaning</strong> – tailored for high‑rise or low‑rise units.</li>
              <li><strong>Specialty Services</strong> – office cleaning, post‑construction cleaning, green cleaning.</li>
            </ul>
          </>
        ),
      },
      {
        title: 'Why Spokane Homeowners Choose Us',
        content: (
          <>
            <ul>
              <li>Bonded and Insured Service</li>
              <li>Satisfaction Guarantee</li>
              <li>Professionally Trained and Background‑Checked Staff</li>
              <li>Eco‑Friendly, Safe Products</li>
              <li>All Equipment and Supplies Provided</li>
              <li>Locally Owned and Operated</li>
            </ul>
          </>
        ),
      },
      {
        title: 'Our Simple Cleaning Process',
        content: (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ContentCard>
                <h3 className="text-xl font-semibold mb-2">1) Request Your Free Quote</h3>
                <p className="text-text">Contact us for a free quote – we’ll ask about your home’s size, cleaning frequency, and any special requests.</p>
              </ContentCard>
              <ContentCard>
                <h3 className="text-xl font-semibold mb-2">2) Choose Your Schedule</h3>
                <p className="text-text">Select a convenient day and time – we offer flexible scheduling including weekdays, weekends, mornings or afternoons.</p>
              </ContentCard>
              <ContentCard>
                <h3 className="text-xl font-semibold mb-2">3) Sit Back and Relax</h3>
                <p className="text-text">Relax while our team arrives on time, cleans with precision, and leaves your home sparkling.</p>
              </ContentCard>
            </div>
          </>
        ),
      },
      {
        title: 'What Spokane Residents Say',
        content: (
          <>
            <ContentCard as="blockquote">
              “After trying three other companies, Cleaners Ready 2Go is the best. They’re detail‑oriented, friendly, and always on time.” – Amanda
              P., Spokane Valley
            </ContentCard>
            <ContentCard as="blockquote">
              “We hired them for a deep clean before putting our South Hill home on the market. The buyers commented on how fresh it felt, and we sold within a week.” –
              Daniel M.
            </ContentCard>
            <ContentCard as="blockquote">
              “I love their green cleaning option. My allergies have improved and the house smells amazing without harsh chemicals.” – Lisa K., Liberty Lake
            </ContentCard>
          </>
        ),
      },
      {
        title: 'Meet Our Spokane Cleaning Team',
        content: (
          <>
            <p>
              Our team members have years of experience, are background‑checked, and love serving the Spokane community.
            </p>
          </>
        ),
      },
      {
        title: 'FAQ',
        content: (
          <>
            <ul>
              <li>
                <strong>What’s included in your cleaning service?</strong> Dusting, vacuuming, mopping, bathroom and kitchen cleaning, and optional add‑ons.
              </li>
              <li>
                <strong>Are you insured?</strong> Yes, we are fully insured and bonded.
              </li>
              <li>
                <strong>Do I need to provide cleaning supplies?</strong> No, we bring everything needed.
              </li>
              <li>
                <strong>What about pets?</strong> We’re pet‑friendly – just let us know any special instructions.
              </li>
            </ul>
          </>
        ),
      },
      {
        title: 'Service Details for Spokane Homeowners',
        content: (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="local-expertise">
              <AccordionTrigger>Local insight tailored to Spokane</AccordionTrigger>
              <AccordionContent>
                Many Spokane homeowners prefer working with teams who understand the Inland Northwest’s climate, neighborhoods, and lifestyle.
                That local context lets us tailor schedules, methods, and customer care for more relevant results and faster response times.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="bonded-insured">
              <AccordionTrigger>Fully bonded and insured in Washington</AccordionTrigger>
              <AccordionContent>
                We maintain a Washington State general-liability policy and a janitorial surety bond. Certificate copies are available upon request
                so you can feel confident coverage is in place for unexpected mishaps.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="satisfaction-policy">
              <AccordionTrigger>Satisfaction policy with complimentary re-visit</AccordionTrigger>
              <AccordionContent>
                If something doesn’t meet your expectations, tell us within 24 hours. After a brief on‑site review, we’ll schedule a complimentary
                re‑visit to address the concern. Full details appear in our Customer Care Terms.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="training-screening">
              <AccordionTrigger>Trained, screened technicians</AccordionTrigger>
              <AccordionContent>
                Every technician completes a structured skills program covering surfaces, products, safety, and customer courtesy. A third‑party
                criminal background screen current as of the employee’s hire date adds another layer of peace of mind.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="eco-products">
              <AccordionTrigger>Eco‑conscious products with SDS available</AccordionTrigger>
              <AccordionContent>
                We select low‑VOC, biodegradable formulas marketed by their manufacturers as greener choices. Safety Data Sheets (SDS) are always
                available. While no product is “risk‑free,” these options aim to reduce residues and odors inside your Spokane home.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="equipment-supplies">
              <AccordionTrigger>All equipment and supplies provided</AccordionTrigger>
              <AccordionContent>
                From HEPA vacuums to microfiber cloths, we arrive with the tools needed for most residential jobs no last‑minute store runs or
                storage hassles for you.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ),
      },
      {
        title: 'Business Hours',
        content: (
          <>
            <p>Monday–Friday 8 am–6 pm | Saturday 9 am–2 pm</p>
          </>
        ),
      },
    ],
  };

  return <LocationPageTemplate {...pageDetails} />;
}
