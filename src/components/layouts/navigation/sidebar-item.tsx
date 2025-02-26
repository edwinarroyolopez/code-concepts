import Link from "@/components/ui/link";
import { getIcon } from "@/utils/get-icon";
import * as sidebarIcons from "@/components/icons/sidebar";

import { useRouter } from "next/router";
import cn from "classnames";
import { useTranslation } from "next-i18next";
import { ChevronRight } from "@/components/icons/chevron-right";

import { motion, AnimatePresence } from "framer-motion";

const SidebarItem = ({
  href,
  icon,
  label,
  childMenu,
  miniSidebar,
}: {
  href: any;
  icon: any;
  label: string;
  childMenu: [];
  miniSidebar?: boolean;
}) => {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <motion.div
      initial={false}
      className={cn(
        "group cursor-pointer rounded-md px-3 py-2.5 text-body-dark hover:bg-gray-100 focus:text-accent"
      )}
      //   onClick={onClick}
    >
      <Link className={cn("flex w-full items-center text-sm")} href={href}>
        <span className="text-gray-600">
          {getIcon({
            iconList: sidebarIcons,
            iconName: icon,
            className: "w-5 h-5 me-3",
          })}
        </span>
        <span className={""}>{t(label)}</span>

        <ChevronRight
          className={cn(
            "h-3.5 w-3.5 shrink-0 opacity-75 transition-transform duration-300 ltr:ml-auto ltr:mr-0 rtl:mr-auto rtl:ml-0"
          )}
        />
      </Link>
    </motion.div>
  );
};

export default SidebarItem;
