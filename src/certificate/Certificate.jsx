import "./Certificate.css";

/**
 * @typedef CertificateProps
 * @property {import("src/App").CertificateItem[]} certificates
 */

/**
 * @param {CertificateProps} _
 */
export const Certificate = ({ certificates }) => {
  /** @type {Record<number, import("src/App").CertificateItem[]>} */
  const certificateGroupByYear = {};

  certificates.forEach((c) => {
    const grp = certificateGroupByYear[c.year];
    if (!grp) {
      certificateGroupByYear[c.year] = [c];
    } else {
      grp.push(c);
    }
  });

  const certificateGroupByYearArr = Object.entries(certificateGroupByYear);

  certificateGroupByYearArr.sort(([aYear], [bYear]) =>
    aYear < bYear ? 1 : -1,
  );

  return (
    <div className="Certificate">
      <table className="certificate-table">
        <tbody>
          {certificateGroupByYearArr.map(
            /**
             * @param {[number, import("src/App").CertificateItem[]]} _
             */
            // @ts-ignore
            ([year, cs]) => (
              <tr key={year}>
                <th className="certificate-year">{year}</th>
                <td>
                  {cs.map((c, i) => (
                    <div key={i}>
                      <span className="certificate-name">
                        {c.url ? (
                          <a href={c.url} target="_blank">
                            {c.name}
                          </a>
                        ) : (
                          c.name
                        )}
                      </span>
                      , {c.host}
                    </div>
                  ))}
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
};
