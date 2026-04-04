export type BoardMemberCardProps = Readonly<{
  name: string;
  title: string;
  imagePlaceholder?: string;
  emailUrl?: string;
  linkedInUrl?: string;
}>;

export default function BoardMemberCard({
  name,
  title,
  imagePlaceholder,
  emailUrl,
  linkedInUrl,
}: BoardMemberCardProps) {
  return (
    <article className="flex flex-col overflow-hidden bg-white shadow-lg transition hover:shadow-xl">
      {/* Image section (~2/3) with gradient fade into text section */}
      <div className="relative aspect-3/4 w-full shrink-0 overflow-hidden bg-neutral-200">
        {imagePlaceholder ? (
          <img src={imagePlaceholder} alt="" className="h-full w-full object-cover object-top" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-neutral-400 text-xs">
            Photo
          </div>
        )}
        {/* White-to-transparent gradient at bottom of image */}
        <div
          className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#F8F8F8] to-transparent"
          aria-hidden
        />
      </div>

      {/* Text section (~1/3) - light grey background */}
      <div className="flex flex-col gap-1 bg-[#F8F8F8] px-5 pb-6 pt-4">
        <h3 className="font-bold text-xl text-black">{name}</h3>
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-normal text-black">{title}</p>
          <div className="flex shrink-0 items-center gap-3">
            {emailUrl && (
              <a
                href={emailUrl}
                className="text-black hover:opacity-70 transition"
                aria-label="Email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            )}
            {linkedInUrl && (
              <a
                href={linkedInUrl}
                className="text-black hover:opacity-70 transition"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
