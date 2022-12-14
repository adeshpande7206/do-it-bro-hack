// Navigation

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";



declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootTabParamList = {
  Home: undefined;
  DailyTasks: undefined;
  Projects: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Onboarding: undefined;
  OTP: undefined;
  LogIn: undefined;
  // Projects: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type BottomTabTypes = {
  name: keyof RootTabParamList;
  title: string;
  component: (props: any) => JSX.Element | null;
  icon: (color: string) => JSX.Element;
  hideHeader?: boolean;
  alignCenter?: boolean;
};

// Task

export interface TaskItemInterface {
  id: number;
  title: string;
  start_date: string;
  start_time: string;
  due_date: string;
  due_time: string;
  status: "complete" | "due" | "inProgress" | "todo";
}

export type TaskItemType = TaskItemInterface | null;

// Projects

export interface ProjectsItemType {
  title: string;
  totalTasks: number;
  completedTasks: number;
  addButton?: boolean;
}
