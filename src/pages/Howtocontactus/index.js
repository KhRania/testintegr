import React from "react";

import { Img, Text, Button, Line } from "components";

const HowtocontactusPage = () => {
  function handleNavigate4() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate5() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins gap-[255px] md:gap-[40px] sm:gap-[40px] items-center justify-end mx-[auto] w-[100%]">
        <div className="h-[1434px] md:h-[1564px] sm:h-[1796px] relative w-[100%]">
          <div className="absolute bg-gradient  flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] p-[66px] sm:px-[20px] md:px-[40px] w-[100%]">
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between mb-[1155px] md:w-[100%] sm:w-[100%] w-[98%]">
              <Img
                src="images/img_yooreed1.png"
                className="h-[102px] md:h-[auto] sm:h-[auto] object-cover sm:w-[100%] w-[auto]"
                alt="yooreedOne"
              />
              <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    YOOREED
                  </Text>
                  <Text
                    className="font-bold text-black_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    OPERATEURS
                  </Text>
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-[auto]"
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
              <Button className="cursor-pointer font-normal leading-[normal] min-w-[137px] md:mt-[0] sm:mt-[0] my-[25px] not-italic text-[18px] text-center text-white_A700 w-[auto]">
                CONNEXION
              </Button>
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
                    onClick={handleNavigate4}
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
                  onClick={handleNavigate5}
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

export default HowtocontactusPage;
