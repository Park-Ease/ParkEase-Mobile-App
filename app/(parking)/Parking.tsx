import React from "react";
import { Image } from "expo-image";
import { images } from "@/constants";
import Svg, { Path } from "react-native-svg";
import { parkingDataStore } from "@/store/parkingDataStore";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const ParkingArea = () => {
  const { spotsInfo, parkingSpotName, filled, total } = parkingDataStore();

  return (
    <View>
      <View className="flex flex-row p-2 justify-between">
        <View className="flex flex-row gap-4 items-center">
          <View>
            <Svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-10 h-10"
            >
              <Path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <Path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </Svg>
          </View>
          <View>
            <Text className="text-white font-FunnelDisplayBold">Location</Text>
            <Text className="text-white text-xl font-FunnelDisplayMedium">
              {parkingSpotName}
            </Text>
          </View>
        </View>
        <View className="pr-4">
          <Text className="text-white font-FunnelDisplayMedium">
            Filled: {filled}
          </Text>
          <Text className="text-white font-FunnelDisplayMedium">
            Total: {total}
          </Text>
        </View>
      </View>
      <ScrollView className="p-1">
        {spotsInfo.map((data, ind) => {
          return (
            <View className="flex flex-row w-full" key={ind}>
              <View className="w-3/5">
                <View className="relative w-full h-32">
                  <Image
                    source={images.parking_slot}
                    className="h-full w-full"
                  />
                  <View className="absolute h-full w-full flex items-center justify-center">
                    {data && (
                      <Image
                        source={images.car_top_view}
                        className="w-9/12 h-20"
                      />
                    )}
                  </View>
                </View>
                <View className="h-2 w-full bg-transparent m-1">
                  <Image
                    source={images.dotted_lines}
                    className="h-full w-full "
                    contentFit="cover"
                  />
                </View>
              </View>
              <View className="p-2">
                <Text className="text-white p-2 font-JakartaMedium">
                  Slot.no: {ind + 1}
                </Text>
                <Text className="text-white p-2 font-JakartaMedium">
                  Status: {data ? "filled" : "Empty"}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ParkingArea;
