import React from "react";

import { Img, Text, Button, Line } from "components";

const DtailevenementPage = () => {
  function handleNavigate10() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col items-center justify-start mx-[auto] w-[100%]">
        <div className="bg-gradient  flex flex-col items-center justify-end pt-[66px] w-[100%]">
          <div className="flex flex-col gap-[54px] items-center justify-start w-[100%]">
            <div className="flex flex-col items-start justify-start max-w-[1280px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
              <div className="flex md:flex-col sm:flex-col flex-row font-poppins md:gap-[40px] sm:gap-[40px] items-center justify-between w-[100%]">
                <Img
                  src="images/img_yooreed1.png"
                  className="sm:flex-1 h-[102px] md:h-[auto] sm:h-[auto] object-cover sm:w-[100%] w-[auto]"
                  alt="yooreedOne"
                />
                <div className="flex md:flex-1 sm:flex-1 flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
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
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      PARTENAIRES
                    </Text>
                    <Text
                      className="font-bold text-black_900 text-left w-[auto]"
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
              <Text
                className="font-orelegaone mt-[102px] not-italic text-black_900 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Lorem ipsum dolor sit amet, consectetur..
              </Text>
              <Text
                className="font-orelegaone mt-[12px] not-italic text-black_900 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Lorem ipsum..
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-[100%]">
              <Img
                src="images/img_1329.png"
                className="h-[575px] sm:h-[auto] object-cover w-[100%]"
                alt="1329"
              />
              <Text
                className="font-poppins leading-[30.00px] mt-[57px] not-italic text-black_900 text-center sm:w-[100%] w-[90%]"
                as="h4"
                variant="h4"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <Text
                className="font-orelegaone mt-[43px] not-italic text-black_900 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Photos en relations avec l’évènement
              </Text>
              <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-start max-w-[1284px] mt-[55px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
                <Img
                  src="images/img_1329.png"
                  className="sm:flex-1 h-[421px] md:h-[auto] sm:h-[auto] object-cover sm:w-[100%] w-[50%]"
                  alt="1330"
                />
                <Img
                  src="images/img_1329.png"
                  className="sm:flex-1 h-[421px] md:h-[auto] sm:h-[auto] object-cover sm:w-[100%] w-[50%]"
                  alt="1331"
                />
              </div>
              <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-start max-w-[1284px] mt-[25px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
                <Img
                  src="images/img_1329.png"
                  className="sm:flex-1 h-[421px] md:h-[auto] sm:h-[auto] object-cover sm:w-[100%] w-[50%]"
                  alt="1332"
                />
                <Img
                  src="images/img_1329.png"
                  className="sm:flex-1 h-[421px] md:h-[auto] sm:h-[auto] object-cover sm:w-[100%] w-[50%]"
                  alt="1333"
                />
              </div>
              <footer className="bg-red_A200 flex font-poppins items-center justify-center mt-[93px] w-[100%]">
                <div className="flex flex-col items-center justify-center mb-[14px] ml-[85px] mr-[80px] mt-[30px] w-[89%]">
                  <div className="flex flex-col gap-[44px] items-center justify-center w-[100%]">
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
                        Rue de la cite, Sousse 4020 Seofy@mail.com Tél.: 00 216
                        98 100 100
                      </Text>
                    </div>
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between w-[100%]">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[15px] items-start justify-start p-[3px] w-[15px]"
                        style={{
                          backgroundImage: "url('images/img_group25.svg')",
                        }}
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
                          onClick={handleNavigate10}
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
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DtailevenementPage;
