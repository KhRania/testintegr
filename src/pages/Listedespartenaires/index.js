import React from "react";

import { Img, Text, Button, Line } from "components";

const ListedespartenairesPage = () => {
  function handleNavigate() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate1() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins gap-[255px] md:gap-[40px] sm:gap-[40px] items-center justify-end mx-[auto] w-[100%]">
        <div className="md:h-[1389px] h-[1434px] sm:h-[1595px] relative w-[100%]">
          <div className="absolute bg-gradient  h-[1389px] inset-y-[0] left-[0] my-[auto] rotate-[90deg] w-[85%]"></div>
          <div className="absolute flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] inset-x-[0] items-center justify-between mx-[auto] top-[5%] w-[89%]">
            <Img
              src="images/img_yooreed1.png"
              className="h-[102px] md:h-[auto] sm:h-[auto] object-cover sm:w-[100%] w-[auto]"
              alt="yooreedOne"
            />
            <div className="flex flex-col items-start justify-start max-w-[709px] w-[100%]">
              <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                <Text
                  className="font-normal not-italic text-black_900 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  YOOREED
                </Text>
                <Text
                  className="font-normal not-italic text-black_900 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  OPERATEURS
                </Text>
                <Text
                  className="font-bold text-black_900 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  PARTENAIRES
                </Text>
                <Text
                  className="font-normal not-italic text-black_900 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  EVENEMENTS
                </Text>
                <Text
                  className="font-normal not-italic text-black_900 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  CONTACT
                </Text>
              </div>
            </div>
            <Button
              className="cursor-pointer font-normal leading-[normal] min-w-[136px] md:mt-[0] sm:mt-[0] my-[25px] not-italic text-[18px] text-center text-white_A700 w-[auto]"
              size="lg"
            >
              CONNEXION
            </Button>
          </div>
          <div className="absolute flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] inset-x-[0] items-center justify-evenly mx-[auto] top-[19%] w-[100%]">
            <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col items-end justify-end p-[11px] md:w-[100%] sm:w-[100%] w-[20%]">
              <Img
                src="images/img_logokleur.png"
                className="h-[146px] md:h-[auto] sm:h-[auto] mb-[46px] mt-[62px] object-cover w-[83%]"
                alt="logokleur"
              />
            </div>
            <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-row gap-[48px] items-center justify-center sm:pr-[20px] md:pr-[40px] pr-[43px] py-[43px] md:w-[100%] sm:w-[100%] w-[20%]">
              <Line className="bg-black_900 h-[180px] my-[5px] w-[1px]" />
              <Img
                src="images/img_qqq1.png"
                className="h-[185px] md:h-[auto] sm:h-[auto] mr-[11px] mt-[5px] object-cover w-[185px]"
                alt="qqqOne"
              />
            </div>
            <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-row gap-[26px] items-center justify-center sm:pr-[20px] pr-[27px] py-[27px] md:w-[100%] sm:w-[100%] w-[20%]">
              <Line className="bg-black_900 h-[180px] my-[21px] w-[1px]" />
              <Img
                src="images/img_download1.png"
                className="h-[72px] md:h-[auto] sm:h-[auto] object-cover w-[90%]"
                alt="downloadOne"
              />
            </div>
            <div className="bg-white_A700 flex md:flex-1 sm:flex-1 sm:flex-col flex-row sm:gap-[20px] items-center justify-start sm:pr-[20px] md:pr-[40px] pr-[48px] py-[48px] md:w-[100%] sm:w-[100%] w-[40%]">
              <Line className="bg-black_900 h-[180px] sm:h-[1px] sm:w-[100%] w-[1px]" />
              <Img
                src="images/img_logoelyosrinternationale.png"
                className="h-[65px] md:h-[auto] sm:h-[auto] sm:ml-[0] ml-[40px] object-cover sm:w-[100%] w-[36%]"
                alt="logoelyosrinternationale"
              />
              <Line className="bg-black_900 h-[180px] sm:h-[1px] sm:ml-[0] ml-[63px] sm:w-[100%] w-[1px]" />
              <Img
                src="images/img_logotps1.png"
                className="h-[126px] md:h-[auto] sm:h-[auto] sm:ml-[0] ml-[40px] object-cover sm:w-[100%] w-[30%]"
                alt="LogoTPSOne"
              />
            </div>
          </div>
          <div className="absolute flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] inset-x-[0] items-center justify-evenly mx-[auto] top-[38%] w-[100%]">
            <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col items-end justify-end p-[11px] md:w-[100%] sm:w-[100%] w-[20%]">
              <Img
                src="images/img_logokleur.png"
                className="h-[146px] md:h-[auto] sm:h-[auto] mb-[46px] mt-[62px] object-cover w-[83%]"
                alt="logokleur One"
              />
            </div>
            <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-row gap-[48px] items-center justify-center sm:pr-[20px] md:pr-[40px] pr-[43px] py-[43px] md:w-[100%] sm:w-[100%] w-[20%]">
              <Line className="bg-black_900 h-[180px] my-[5px] w-[1px]" />
              <Img
                src="images/img_qqq1.png"
                className="h-[185px] md:h-[auto] sm:h-[auto] mr-[11px] mt-[5px] object-cover w-[185px]"
                alt="qqqOne One"
              />
            </div>
            <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-row gap-[26px] items-center justify-center sm:pr-[20px] pr-[27px] py-[27px] md:w-[100%] sm:w-[100%] w-[20%]">
              <Line className="bg-black_900 h-[180px] my-[21px] w-[1px]" />
              <Img
                src="images/img_download1.png"
                className="h-[72px] md:h-[auto] sm:h-[auto] object-cover w-[90%]"
                alt="downloadOne One"
              />
            </div>
            <div className="bg-white_A700 flex md:flex-1 sm:flex-1 sm:flex-col flex-row sm:gap-[20px] items-center justify-start sm:pr-[20px] md:pr-[40px] pr-[48px] py-[48px] md:w-[100%] sm:w-[100%] w-[40%]">
              <Line className="bg-black_900 h-[180px] sm:h-[1px] sm:w-[100%] w-[1px]" />
              <Img
                src="images/img_logoelyosrinternationale.png"
                className="h-[65px] md:h-[auto] sm:h-[auto] sm:ml-[0] ml-[40px] object-cover sm:w-[100%] w-[36%]"
                alt="logoelyosrinternationale One"
              />
              <Line className="bg-black_900 h-[180px] sm:h-[1px] sm:ml-[0] ml-[63px] sm:w-[100%] w-[1px]" />
              <Img
                src="images/img_logotps1.png"
                className="h-[126px] md:h-[auto] sm:h-[auto] sm:ml-[0] ml-[40px] object-cover sm:w-[100%] w-[30%]"
                alt="LogoTPSOne One"
              />
            </div>
          </div>
          <div className="absolute bottom-[24%] flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] inset-x-[0] items-center justify-evenly mx-[auto] w-[100%]">
            <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col items-end justify-end p-[11px] md:w-[100%] sm:w-[100%] w-[20%]">
              <Img
                src="images/img_logokleur.png"
                className="h-[146px] md:h-[auto] sm:h-[auto] mb-[46px] mt-[62px] object-cover w-[83%]"
                alt="logokleur Two"
              />
            </div>
            <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-row gap-[48px] items-center justify-center sm:pr-[20px] md:pr-[40px] pr-[43px] py-[43px] md:w-[100%] sm:w-[100%] w-[20%]">
              <Line className="bg-black_900 h-[180px] my-[5px] w-[1px]" />
              <Img
                src="images/img_qqq1.png"
                className="h-[185px] md:h-[auto] sm:h-[auto] mr-[11px] mt-[5px] object-cover w-[185px]"
                alt="qqqOne Two"
              />
            </div>
            <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-row gap-[26px] items-center justify-center sm:pr-[20px] pr-[27px] py-[27px] md:w-[100%] sm:w-[100%] w-[20%]">
              <Line className="bg-black_900 h-[180px] my-[21px] w-[1px]" />
              <Img
                src="images/img_download1.png"
                className="h-[72px] md:h-[auto] sm:h-[auto] object-cover w-[90%]"
                alt="downloadOne Two"
              />
            </div>
            <div className="bg-white_A700 flex md:flex-1 sm:flex-1 sm:flex-col flex-row sm:gap-[20px] items-center justify-start sm:pr-[20px] md:pr-[40px] pr-[48px] py-[48px] md:w-[100%] sm:w-[100%] w-[40%]">
              <Line className="bg-black_900 h-[180px] sm:h-[1px] sm:w-[100%] w-[1px]" />
              <Img
                src="images/img_logoelyosrinternationale.png"
                className="h-[65px] md:h-[auto] sm:h-[auto] sm:ml-[0] ml-[40px] object-cover sm:w-[100%] w-[36%]"
                alt="logoelyosrinternationale Two"
              />
              <Line className="bg-black_900 h-[180px] sm:h-[1px] sm:ml-[0] ml-[63px] sm:w-[100%] w-[1px]" />
              <Img
                src="images/img_logotps1.png"
                className="h-[126px] md:h-[auto] sm:h-[auto] sm:ml-[0] ml-[40px] object-cover sm:w-[100%] w-[30%]"
                alt="LogoTPSOne Two"
              />
            </div>
          </div>
          <div className="absolute bg-red_A200 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-[auto] p-[14px] w-[100%]">
            <div className="flex flex-col gap-[44px] items-center justify-start mt-[15px] md:w-[100%] sm:w-[100%] w-[91%]">
              <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-end justify-between w-[100%]">
                <Img
                  src="images/img_group26.svg"
                  className="h-[88px] mb-[2px] w-[auto]"
                  alt="GroupTwentySix"
                />
                <div className="flex md:flex-1 sm:flex-1 flex-col items-start justify-start mb-[42px] md:mt-[0] sm:mt-[0] mt-[21px] md:w-[100%] sm:w-[100%] w-[auto]">
                  <div className="flex sm:flex-col flex-row sm:gap-[52px] items-center justify-between w-[100%]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      YOOREED
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      OPERATEURS
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      PARTENAIRES
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      EVENEMENTS
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      CONTACT
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-normal md:mt-[0] sm:mt-[0] mt-[21px] not-italic text-left text-white_A700 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Rue de la cite, Sousse 4020 Seofy@mail.com Tél.: 00 216 98 100
                  100
                </Text>
              </div>
              <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between w-[100%]">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[15px] items-start justify-start p-[3px] w-[15px]"
                  style={{ backgroundImage: "url('images/img_group25.svg')" }}
                >
                  <Img
                    src="images/img_lightbulb.svg"
                    className="h-[8px] w-[7px]"
                    alt="lightbulb"
                  />
                </div>
                <Text
                  className="not-italic text-left text-white_A700 w-[auto]"
                  variant="body1"
                >
                  COPYRIGHT YOOREED 2023
                </Text>
                <Line className="bg-white_A700 h-[1px] md:mt-[0] sm:mt-[0] my-[8px] rotate-[180deg] w-[auto]" />
                <div className="flex md:flex-1 sm:flex-1 flex-row items-start justify-center md:w-[100%] sm:w-[100%] w-[auto]">
                  <Img
                    src="images/img_facebook.svg"
                    className="common-pointer h-[14px] w-[14px]"
                    onClick={handleNavigate}
                    alt="facebook"
                  />
                  <Img
                    src="images/img_camera.svg"
                    className="h-[15px] ml-[10px] w-[15px]"
                    alt="camera"
                  />
                  <Img
                    src="images/img_linkedin.svg"
                    className="h-[13px] ml-[13px] w-[13px]"
                    alt="linkedin"
                  />
                </div>
                <Line className="bg-white_A700 h-[1px] md:mt-[0] sm:mt-[0] my-[8px] rotate-[180deg] w-[auto]" />
                <Text
                  className="not-italic text-left text-white_A700 w-[auto]"
                  variant="body1"
                >
                  INFORMATIONS LEGALES - AGENCE WE SLOTH-LAB
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-red_A200 flex flex-col items-center justify-end p-[11px] w-[100%]">
          <div className="flex flex-col gap-[34px] items-center justify-start max-w-[1275px] mt-[19px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start w-[100%]">
              <Img
                src="images/img_group26.svg"
                className="h-[88px] mb-[8px] w-[auto]"
                alt="GroupTwentySix One"
              />
              <div className="flex md:flex-1 sm:flex-1 flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[88px] md:mt-[0] sm:mt-[0] mt-[23px] md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="flex sm:flex-col flex-row sm:gap-[52px] items-center justify-between w-[100%]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    UTICA
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    OPERATEURS
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    PARTENAIRES
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    EVENEMENTS
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    CONTACT
                  </Text>
                </div>
              </div>
              <Text
                className="font-normal md:ml-[0] sm:ml-[0] ml-[123px] md:mt-[0] sm:mt-[0] mt-[21px] not-italic text-right text-white_A700 w-[auto]"
                as="h6"
                variant="h6"
              >
                Rue de la cite, Sousse 4020 Seofy@mail.com Tél.: 00 216 98 100
                100
              </Text>
            </div>
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between w-[100%]">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[15px] items-start justify-start md:mt-[0] sm:mt-[0] mt-[5px] p-[3px] w-[15px]"
                style={{ backgroundImage: "url('images/img_group25.svg')" }}
              >
                <Img
                  src="images/img_lightbulb.svg"
                  className="h-[8px] w-[7px]"
                  alt="lightbulb One"
                />
              </div>
              <Text
                className="not-italic text-left text-white_A700 w-[auto]"
                variant="body1"
              >
                COPYRIGHT YOOREED 2023
              </Text>
              <Line className="bg-white_A700 h-[1px] md:mt-[0] sm:mt-[0] my-[12px] rotate-[180deg] w-[auto]" />
              <div className="flex md:flex-1 sm:flex-1 flex-row items-start justify-center md:mt-[0] sm:mt-[0] mt-[4px] md:w-[100%] sm:w-[100%] w-[auto]">
                <Img
                  src="images/img_facebook.svg"
                  className="common-pointer h-[14px] w-[14px]"
                  onClick={handleNavigate1}
                  alt="facebook One"
                />
                <Img
                  src="images/img_camera.svg"
                  className="h-[15px] ml-[10px] w-[15px]"
                  alt="camera One"
                />
                <Img
                  src="images/img_linkedin.svg"
                  className="h-[13px] ml-[13px] w-[13px]"
                  alt="linkedin One"
                />
              </div>
              <div className="flex md:flex-1 sm:flex-1 md:flex-col sm:flex-col flex-row gap-[11px] items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <Line className="bg-white_A700 h-[1px] mb-[10px] md:mt-[0] sm:mt-[0] mt-[13px] rotate-[180deg] w-[42%]" />
                <Text
                  className="not-italic text-left text-white_A700 w-[auto]"
                  variant="body1"
                >
                  INFORMATIONS LEGALES - AGENCE WE SLOTH-LAB
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListedespartenairesPage;
